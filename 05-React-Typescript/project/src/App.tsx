import { useContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserContext } from "./components/useContext/UserContext";

function App() {
  const { setUserInfo } = useContext(UserContext);

  useEffect(() => {
    setUserInfo({
      firstName: "sarah",
      lastName: "moradi",
      age: 24,
    });
  }, [setUserInfo]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
