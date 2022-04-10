import React, { useState } from "react";

const FormExample = () => {
  let [name, setName] = useState("");
  let [showName, setShowName] = useState(false);

  // Any event in javascript give us the possibility to check the event object. We use this event object to access the input value and set it to the name property
  const handleChange = (event) => {
    setName(event.currentTarget.value);
  };

  // We need to access the submit event to prevent the page reload. After that, we change the boolean property to be true so it will be shown
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowName(true);
  };

  return (
    <div className="centered-content">
      <h1>
        This component is using the useState hook to control what's added in the
        input
      </h1>
      <p>
        The useState hook allows us to control the value of the input. We will
        store in one state property the value of the input and in another, a
        boolean to show the final text. We use two elements here to work with
        it:
      </p>
      <ul>
        <li>
          An onChange event on the input. We link the value of the input to the
          state property an with onChange, we say that on every change that
          happens to the input, the input will listen ot it and assign it to
          it's own value
        </li>
        <li>
          An onSubmit event on the form. Through submitting this form (clicking
          the button) We will change another state property to show some text to
          the user. While working with forms, we need to prevent the default
          behaviour of that form that will force a reload on the page
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} />
        <button>Click</button>
      </form>
      {/* Through a ternary we control what to show if smth is true or false */}
      {showName ? (
        <p>Name you wrote is: {name}</p>
      ) : (
        <p>Write a name and click the button</p>
      )}
    </div>
  );
};

export default FormExample;
