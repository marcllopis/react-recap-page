import React, { useState } from "react";
import MainMenu from "./MainMenu";
import { optionToShow } from "./MainHandler";
import "./App.css";

function App() {
  let [status, setStatus] = useState("home");

  const handleSection = (option) => {
    setStatus(option);
  };

  return (
    <>
      <nav>
        <p onClick={() => handleSection("home")}>Home</p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/marcllopis/react-recap-page"
          >
            Github
          </a>
        </p>
      </nav>
      {status === "home" ? (
        <MainMenu action={handleSection} />
      ) : (
        <div className="main-center">{optionToShow[status]()}</div>
      )}
    </>
  );
}

export default App;
