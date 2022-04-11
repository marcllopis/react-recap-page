import React, { useState } from "react";
import MainMenu from "./MainMenu";
import Navbar from "./Navbar";
import { optionToShow } from "./MainHandler";
import "./App.css";

function App() {
  let [status, setStatus] = useState("home");

  const handleSection = (option) => {
    setStatus(option);
  };

  return (
    <>
      <Navbar action={handleSection} />
      {status === "home" ? (
        <MainMenu action={handleSection} />
      ) : (
        <div className="main-center">{optionToShow[status]()}</div>
      )}
    </>
  );
}

export default App;
