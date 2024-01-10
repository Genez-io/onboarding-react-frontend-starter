import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  async function sayHello() {
    setResponse("Hello " + name);
  }

  return (
    <>
      <div>
        <a href="https://genez.io" target="_blank">
          <img
            src="https://raw.githubusercontent.com/Genez-io/graphics/main/svg/Logo_Genezio_White.svg"
            className="logo"
            alt="Genezio Logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Demo Frontend Genezio + React</h1>
      <div className="card">
        <input
          type="text"
          className="input-box"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <br />

        <button onClick={() => sayHello()}>Say Hello</button>
        <p className="read-the-docs">{response}</p>
      </div>
    </>
  );
}
