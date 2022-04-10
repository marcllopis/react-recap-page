import React, { useState } from "react";

const ClickEvents = () => {
  let [name, setName] = useState("");
  // the second element here is the fn that useState hook give us to modify the value of the name property

  const handleClick = () => setName("Marc");
  // handle click is a custom made fn in charge of calling the setName fn that will modify the state property
  return (
    <div className="centered-content">
      <h1>A change on our state will trigger a re-render on our UI</h1>
      <p>
        We will use that functionality of React to handle any change on our UI.
        Through a button click, we will change the value of the state property
        name from being an empty string to the name Marc. Anytime that a state
        property value changes, the UI is rendered again to show that change.
      </p>
      <p>
        Here will come my name after clicking the button: <b>{name}</b>
      </p>
      {/* When clicking a button, we use the onClick event, we need to remember to never call that function directly here! if we need to pass some arguments to that click event function, we could do it like this:
      onClick={() => handleClick(myArguments)}
      */}
      <button onClick={handleClick}>Click!</button>
    </div>
  );
};

export default ClickEvents;
