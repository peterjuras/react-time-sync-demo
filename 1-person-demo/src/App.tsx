import React from "react";
import "./App.css";

interface Props {
  name: string;
  unixBirthdate: number;
}

const Person: React.FC<Props> = ({ name, unixBirthdate }) => {
  const seconds = Date.now() / 1000 - unixBirthdate;

  const text = `Hi, I'm ${name}! I'm ${Math.round(seconds)} seconds old.`;

  return (
    <div className="App">
      <header className="App-header">
        <p>{text}</p>
      </header>
    </div>
  );
};

export default Person;
