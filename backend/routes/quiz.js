const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

// GET /api/quiz/question
router.get("/question", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT id, question
      FROM questions
      ORDER BY RANDOM()
      LIMIT 1
    `);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Nenhuma pergunta encontrada."
      });
    }

    const question = result.rows[0];

    res.json({
      id: question.id,
      question: question.question
    });

  } catch (error) {
    console.error("Erro ao buscar pergunta:", error);

    res.status(500).json({
      message: "Erro interno do servidor."
    });
  }
});


// POST /api/quiz/answer
router.post("/answer", async (req, res) => {
  const { questionId, answer } = req.body;

  if (!questionId || typeof answer !== "string") {
    return res.status(400).json({
      correct: false,
      message: "Dados inválidos."
    });
  }

  try {
    const result = await db.query(
      `
      SELECT id, answer
      FROM questions
      WHERE id = $1
      `,
      [questionId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        correct: false,
        message: "Pergunta não encontrada."
      });
    }

    const question = result.rows[0];

    const userAnswer = answer.trim().toLowerCase();
    const correctAnswer = question.answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      const token = jwt.sign(
        {
          access: true
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h"
        }
      );

      return res.json({
        correct: true,
        access: true,
        token,
        message: "Resposta correta. Acesso liberado."
      });
    }

    return res.json({
      correct: false,
      access: false,
      message: "Resposta incorreta."
    });

  } catch (error) {
    console.error("Erro ao verificar resposta:", error);

    res.status(500).json({
      correct: false,
      message: "Erro interno do servidor."
    });
  }
});


// GET /api/quiz/access
router.get("/access", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      access: false,
      message: "Acesso não autorizado."
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      access: false,
      message: "Token não fornecido."
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (decoded.access === true) {
      return res.json({
        access: true,
        message: "Acesso autorizado."
      });
    }

    return res.status(401).json({
      access: false,
      message: "Acesso negado."
    });

  } catch (error) {
    return res.status(401).json({
      access: false,
      message: "Token inválido ou expirado."
    });
  }
});


module.exports = router;