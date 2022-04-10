import React, { useState } from "react";

const UsingState = () => {
  let [name] = useState("Marc");
  return (
    <div className="centered-content">
      <h1>
        This component is using the useState hook to simply store a value and
        show it later in our html
      </h1>
      <p>
        The useState hook allow us to create a state property and a function in
        charge of changing this value when called. On this example we are not
        changing the value yet, so we won't declare it. On the useState hook,
        the value you write in the brackets, will be the initial value of your
        state property
      </p>
      <p>
        The state property name value: <b>{name}</b>
      </p>
    </div>
  );
};

export default UsingState;
