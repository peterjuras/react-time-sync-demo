import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useCountdown } from "react-time-sync";
import "./App.css";

const App: React.FC = () => {
  const [target, setTarget] = useState(0);
  const timeLeft = useCountdown({ until: target });

  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="contained"
          disabled={timeLeft > 0}
          onClick={() => {
            setTarget(Date.now() + 3000);
          }}
        >
          SEND
        </Button>
        <p>{timeLeft > 0 ? `Try again in ${timeLeft} seconds.` : "-"}</p>
      </header>
    </div>
  );
};

export default App;
