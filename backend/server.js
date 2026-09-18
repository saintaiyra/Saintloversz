require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

const quizRoutes = require("./routes/quiz");

app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend do Saint Aiyra está funcionando.",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend rodando na porta ${PORT}`);
});