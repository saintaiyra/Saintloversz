"use client";

import { useEffect, useState } from "react";

type Question = {
  id: number;
  question: string;
};

type AccessGateProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AccessGate({
  isOpen,
  onClose,
  onSuccess,
}: AccessGateProps) {
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const API_URL = "https://saint-aiyra-backend.onrender.com";

  useEffect(() => {
    if (isOpen) {
      loadQuestion();
    }
  }, [isOpen]);

  async function loadQuestion() {
    setLoading(true);
    setMessage("");
    setAnswer("");

    try {
      const response = await fetch(
        `${API_URL}/api/quiz/question`
      );

      const data = await response.json();

      setQuestion(data);
    } catch (error) {
      console.error(error);
      setMessage("BACKEND OFFLINE.");
    } finally {
      setLoading(false);
    }
  }

  async function submitAnswer() {
    if (!question || !answer.trim()) {
      return;
    }

    setMessage("VERIFICANDO...");

    try {
      const response = await fetch(
        `${API_URL}/api/quiz/answer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questionId: question.id,
            answer: answer,
          }),
        }
      );

      const data = await response.json();

      if (data.correct && data.token) {
        localStorage.setItem(
          "portfolio_token",
          data.token
        );

        setMessage("");

        onSuccess();

        return;
      }

      setMessage("RESPOSTA INCORRETA.");
    } catch (error) {
      console.error(error);
      setMessage("BACKEND OFFLINE.");
    }
  }

  if (!isOpen) {
    return null;
  }

  // ESTRELAS
  const stars = Array.from({ length: 45 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    delay: `${(index * 0.43) % 6}s`,
    duration: `${4 + ((index * 1.3) % 5)}s`,
    size: `${1 + (index % 3)}px`,
  }));

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden bg-black/90 px-6"
      onClick={onClose}
    >
      {/* ESTRELAS */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {stars.map((star) => (
          <span
            key={star.id}
            className="falling-star absolute block rounded-full bg-[#7C3AED]"
            style={{
              left: star.left,
              top: "-20px",
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* MODAL */}
      <div className="relative z-10 flex min-h-full items-center justify-center">
        <div
          className="relative z-10 w-full max-w-3xl border border-[#7C3AED] bg-black/90 p-8 text-[#7C3AED] md:p-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* FECHAR */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-2xl transition hover:text-white"
          >
            ×
          </button>

          {/* CONTEÚDO */}
          <div className="text-center">
            <p className="mb-6 text-lg">
              my world
            </p>

            <h2 className="mb-10 text-4xl md:text-6xl">
              digite a senha !
            </h2>

            {loading ? (
              <p>LOADING...</p>
            ) : question ? (
              <>
                <p className="mb-8 text-xl md:text-2xl">
                  {question.question}
                </p>

                <input
                  type="text"
                  value={answer}
                  onChange={(e) =>
                    setAnswer(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      submitAnswer();
                    }
                  }}
                  placeholder="YOUR ANSWER..."
                  autoFocus
                  className="mb-6 w-full border border-[#7C3AED] bg-transparent px-6 py-5 text-center text-xl outline-none placeholder:text-[#7C3AED]/50"
                />

                <button
                  onClick={submitAnswer}
                  className="border border-[#7C3AED] px-10 py-5 text-xl transition hover:bg-[#7C3AED] hover:text-black"
                >
                  ENTER →
                </button>

                {message && (
                  <p className="mt-6 text-lg">
                    {message}
                  </p>
                )}
              </>
            ) : (
              <p>
                ERRO AO CARREGAR PERGUNTA.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}