import React, { useState } from "react";
import "./RightsOverview.css";
import "../animations.css";
import { CheckmarkIcon, CrossIcon } from "./Icon";

/**
 * Quiz
 * Renders a quiz with instant feedback.
 * Props:
 *   quiz = [
 *     { question: string, options: [string], answer: number }
 *   ]
 */
// PUBLIC_INTERFACE
function Quiz({ quiz = [] }) {
  // State for each question's selected answer (array of indices or null)
  const [selected, setSelected] = useState(Array(quiz.length).fill(null));

  // Whether user has answered a question (boolean array)
  const isAnswered = index => selected[index] !== null;

  // Animate quiz feedback fade class
  const [animFeedback, setAnimFeedback] = useState(Array(quiz.length).fill(""));
  // Set animation class on answer or reset
  React.useEffect(() => {
    // For each question: if answered, animate in, else fade out
    setAnimFeedback(selected.map((s, i) =>
      s !== null ? "quiz-feedback-anim-in quiz-feedback-fade" : "quiz-feedback-anim-out quiz-feedback-fade"
    ));
    // Remove "out" after fade completes for accessibility
    const timer = setTimeout(() => {
      setAnimFeedback((current) =>
        current.map((c, i) =>
          selected[i] !== null
            ? "quiz-feedback-anim-in quiz-feedback-fade"
            : ""
        )
      );
    }, 340); // fade out > anim duration
    return () => clearTimeout(timer);
  // eslint-disable-next-line
  }, [selected.join(",")]);

  // Handler for answer selection
  const handleChange = (qIdx, oIdx) => {
    // Don't allow change once answered - only first answer counts
    if (isAnswered(qIdx)) return;
    const next = [...selected];
    next[qIdx] = oIdx;
    setSelected(next);
  };

  if (!quiz.length)
    return null;

  return (
    <section className="quiz-section" style={{
      marginTop: 54,
      marginBottom: 32,
      background: "var(--secondary, #FFF)",
      borderRadius: 20,
      boxShadow: "0 2px 12px rgba(25, 118, 210, 0.09)",
      padding: "32px 20px 28px 20px"
    }}>
      <h2 style={{ color: "var(--primary, #1976D2)", fontSize: "1.22rem", marginBottom: 24, textAlign: "center" }}>
        Test Your Knowledge
      </h2>
      <ol style={{ paddingLeft: 0, listStyle: "none", margin: 0 }}>
      {quiz.map((q, qIdx) => (
        <li key={qIdx} style={{
          marginBottom: 34,
          paddingBottom: 20,
          borderBottom: qIdx !== quiz.length - 1 ? "1px solid rgba(25,118,210,0.12)" : "none"
        }}>
          <div className="quiz-question" style={{
            color: "#1A1A1A",
            fontWeight: 500,
            fontSize: "1.08rem",
            marginBottom: 12
          }}>
            {qIdx + 1}. {q.question}
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 10
            }}
            aria-labelledby={`quiz-q${qIdx}`}
            tabIndex={-1}
            onSubmit={e => e.preventDefault()}
          >
            {q.options.map((opt, oIdx) => {
              const isCorrect = (isAnswered(qIdx) && oIdx === q.answer);
              const isSelected = (selected[qIdx] === oIdx);
              let bg = "#EEE";
              let clr = "#222";
              let border = "1.7px solid transparent";
              if (isAnswered(qIdx)) {
                if (isSelected && isCorrect) {
                  bg = "rgba(25,118,210,0.13)";
                  clr = "var(--primary, #1976D2)";
                  border = "1.5px solid var(--primary, #1976D2)";
                } else if (isSelected && !isCorrect) {
                  bg = "#fad8de";
                  clr = "#C62828";
                  border = "1.5px solid #C62828";
                } else if (isCorrect) {
                  // correct answer, but not picked by user
                  bg = "rgba(255,235,59,0.13)";
                  clr = "var(--accent, #FFC107)";
                }
              }

              return (
                <label key={oIdx} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  padding: "11px 12px",
                  borderRadius: 7,
                  cursor: isAnswered(qIdx) ? "not-allowed" : "pointer",
                  background: bg,
                  color: clr,
                  fontWeight: isCorrect ? 600 : 400,
                  boxShadow: "none",
                  border: border,
                  transition: "background 0.12s"
                }}>
                  <input
                    type="radio"
                    checked={isSelected}
                    disabled={isAnswered(qIdx)}
                    style={{ accentColor: "var(--primary, #1976D2)" }}
                    name={`quiz-q-${qIdx}`}
                    value={oIdx}
                    onChange={() => handleChange(qIdx, oIdx)}
                    aria-describedby={`quiz-q${qIdx}-feedback`}
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </form>
          <div id={`quiz-q${qIdx}-feedback`} aria-live="polite" style={{
            minHeight: 26,
            marginTop: 2,
            fontWeight: 500,
            fontSize: "1.03rem",
            display: "flex",
            alignItems: "center",
            gap: 7,
            color: isAnswered(qIdx)
              ? (selected[qIdx] === q.answer ? "var(--primary, #1976D2)" : "#C62828")
              : "#888"
          }}>
            {isAnswered(qIdx) ? (
              selected[qIdx] === q.answer
                ? (
                  <>
                    <span aria-hidden="true" style={{ marginRight: 2 }}><CheckmarkIcon /></span>
                    Correct!
                  </>
                )
                : (
                  <>
                    <span aria-hidden="true" style={{ marginRight: 1 }}><CrossIcon /></span>
                    <span>Incorrect.</span>
                    <span style={{ marginLeft: 7, fontWeight: 400, fontSize: "0.97rem", color: "#444" }}>
                      {" "}Correct answer: <b>{q.options[q.answer]}</b>
                    </span>
                  </>
                )
            ) : ""}
          </div>
        </li>
      ))}
      </ol>
    </section>
  );
}

export default Quiz;
