import { useRef, useState } from "react";
import "./stopwatch.css";
const Stopwatch = () => {
  const [state, setState] = useState(0);
  const [run, setRun] = useState(false);
  const ref = useRef(null);

  //define the start function
  const start = () => {
    if (!run) {
// run false hai toh ise phle true kr denge
      setRun(true);
      ref.current = setInterval(() => {
        setState((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  //define the stop function
  const stop = () => {
    clearInterval(ref.current);
    setRun(false);
  };

  //define the reset function
  const reset = () => {
    setState(0);
    clearInterval(ref.current);
    setRun(false);
  };
  return (
    <div className="container">
      <h2>{state}</h2>
      <div className="btns">
        <button onClick={start} disabled={run}>
          Start
        </button>
        <button onClick={stop} disabled={!run}>
          Stop
        </button>
        <button onClick={reset} disabled={state === 0}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
