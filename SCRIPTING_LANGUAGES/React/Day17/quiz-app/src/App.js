import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const QUESTIONS = [
  {
    category: "Design Systems",
    prompt: "Which token is best for consistent spacing in a UI kit?",
    options: ["CSS variable scale", "Hard-coded margins", "Inline styles", "Random padding"],
    answerIndex: 0,
  },
  {
    category: "JavaScript",
    prompt: "What does the `Array.prototype.at()` method enable?",
    options: ["Slicing arrays", "Indexing with negative values", "Sorting arrays", "Deduplicating arrays"],
    answerIndex: 1,
  },
  {
    category: "React",
    prompt: "Which hook is best for memoizing a derived value?",
    options: ["useEffect", "useMemo", "useReducer", "useRef"],
    answerIndex: 1,
  },
  {
    category: "WebGL",
    prompt: "Three.js primarily abstracts which API?",
    options: ["Canvas 2D", "SVG", "WebGL", "WebGPU"],
    answerIndex: 2,
  },
  {
    category: "Performance",
    prompt: "Which technique avoids layout thrashing?",
    options: ["Mixing reads/writes", "Batching DOM reads", "Using setInterval", "Nested tables"],
    answerIndex: 1,
  },
  {
    category: "UX",
    prompt: "What is the best default for button focus styles?",
    options: ["Remove outline", "Use custom visible focus", "Hide on mouse", "Disable focus"],
    answerIndex: 1,
  },
];

const SCORE_PER_CORRECT = 10;

export default function App() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [history, setHistory] = useState([]);

  const total = QUESTIONS.length;
  const current = QUESTIONS[index];
  const progress = Math.round(((index + 1) / total) * 100);
  const isComplete = index >= total;

  const summary = useMemo(() => {
    const correct = history.filter((item) => item.isCorrect).length;
    return {
      correct,
      wrong: history.length - correct,
      score,
    };
  }, [history, score]);

  function handleSelect(optionIndex) {
    if (answered || isComplete) return;
    const isCorrect = optionIndex === current.answerIndex;
    setSelected(optionIndex);
    setAnswered(true);
    setScore((prev) => prev + (isCorrect ? SCORE_PER_CORRECT : 0));
    setStreak((prev) => (isCorrect ? prev + 1 : 0));
    setHistory((prev) => [
      ...prev,
      {
        prompt: current.prompt,
        chosen: current.options[optionIndex],
        answer: current.options[current.answerIndex],
        isCorrect,
      },
    ]);
  }

  function handleNext() {
    if (!answered) return;
    if (index + 1 >= total) {
      setIndex(total);
      return;
    }
    setIndex((prev) => prev + 1);
    setSelected(null);
    setAnswered(false);
  }

  function handleRestart() {
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setStreak(0);
    setHistory([]);
  }

  return (
    <div className="app">
      <BackgroundScene />
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark">Q</span>
          <div>
            <p className="brand-title">QuizCraft</p>
            <p className="brand-sub">Minimal. Focused. Fast.</p>
          </div>
        </div>
        <div className="meta-pill">
          <span>Score</span>
          <strong>{score}</strong>
        </div>
      </header>

      <main className="quiz-shell">
        <section className="quiz-card">
          <div className="card-top">
            <div className="eyebrow">{current?.category ?? "Results"}</div>
            <div className="progress">
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span>{isComplete ? "Done" : `${index + 1} / ${total}`}</span>
            </div>
          </div>

          {!isComplete ? (
            <>
              <h1 className="question">{current.prompt}</h1>
              <div className="options">
                {current.options.map((option, optionIndex) => {
                  const isSelected = selected === optionIndex;
                  const isAnswer = current.answerIndex === optionIndex;
                  const stateClass = answered
                    ? isAnswer
                      ? "option correct"
                      : isSelected
                      ? "option wrong"
                      : "option"
                    : "option";

                  return (
                    <button
                      key={option}
                      className={stateClass}
                      onClick={() => handleSelect(optionIndex)}
                    >
                      <span className="option-index">0{optionIndex + 1}</span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              <div className="card-actions">
                <div className="status">
                  <span>{answered ? (selected === current.answerIndex ? "Correct" : "Not quite") : "Select an option"}</span>
                  <span className="streak">Streak {streak}</span>
                </div>
                <button className="primary" onClick={handleNext} disabled={!answered}>
                  {index + 1 === total ? "Finish" : "Next"}
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="question">Your flow state summary</h1>
              <div className="results">
                <div className="result-card">
                  <p>Correct</p>
                  <strong>{summary.correct}</strong>
                </div>
                <div className="result-card">
                  <p>Wrong</p>
                  <strong>{summary.wrong}</strong>
                </div>
                <div className="result-card">
                  <p>Score</p>
                  <strong>{summary.score}</strong>
                </div>
              </div>
              <div className="review">
                {history.map((item) => (
                  <div key={item.prompt} className="review-row">
                    <div>
                      <p className="review-prompt">{item.prompt}</p>
                      <p className="review-answer">Your answer: {item.chosen}</p>
                    </div>
                    <span className={item.isCorrect ? "badge good" : "badge bad"}>
                      {item.isCorrect ? "Correct" : `Answer: ${item.answer}`}
                    </span>
                  </div>
                ))}
              </div>
              <button className="primary restart" onClick={handleRestart}>
                Restart quiz
              </button>
            </>
          )}
        </section>

        <aside className="side-panel">
          <div className="panel-card">
            <p className="panel-title">Live insight</p>
            <p className="panel-body">Keep momentum by choosing confidently. The subtle delay in the gradient reacts to your streak.</p>
          </div>
          <div className="panel-card">
            <p className="panel-title">Focus mode</p>
            <p className="panel-body">Three.js generates a soft orbital field to keep the background alive without distraction.</p>
          </div>
          <div className="panel-card">
            <p className="panel-title">Adaptive pacing</p>
            <p className="panel-body">Short questions, crisp feedback, and a clean review pass at the end.</p>
          </div>
        </aside>
      </main>
    </div>
  );
}

function BackgroundScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(3.2, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x9ae6ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    const pointsGeometry = new THREE.BufferGeometry();
    const pointCount = 220;
    const positions = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xfff4b8,
      size: 0.06,
      transparent: true,
      opacity: 0.8,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    const light = new THREE.PointLight(0x83f3ff, 1.4, 30);
    light.position.set(6, 6, 6);
    scene.add(light);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      orb.rotation.y = t * 0.2;
      orb.rotation.x = t * 0.1;
      points.rotation.y = t * 0.05;
      points.rotation.x = Math.sin(t * 0.2) * 0.1;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="bg-scene" ref={mountRef} aria-hidden="true" />;
}
