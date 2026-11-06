import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Learning from "./components/Learning.jsx";
import "./index.css";

function App() {
  const [run, setRun] = useState(0);
  return (
    <>
      {/* Spacer so the reveal triggers on scroll, as it would on the homepage */}
      <div className="spacer">Scroll down ↓</div>
      <Learning key={run} />
      <button className="replay" onClick={() => setRun((n) => n + 1)}>
        Replay
      </button>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
