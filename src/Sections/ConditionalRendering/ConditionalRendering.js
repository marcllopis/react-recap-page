let myAge = 22;
let myName = "Marc";

const ConditionalRendering = () => (
  <div className="centered-content">
    <h1>
      This a simple component that shows how to render or not some information
      based on conditions
    </h1>
    <p>
      In React we can't use if/else statements so if we want to write a
      condition in charge of rendering some information, we will use a ternary
      operator
    </p>
    <p>
      On this example, we have a variable that stores a number, if this number
      is greater than 18 we will show one text, if it is lower we will show
      something different
    </p>
    {myAge >= 18 ? (
      <p>You can go out to night clubs</p>
    ) : (
      <p>You need to be 18 to go out at night clubs</p>
    )}
    <br />
    <p>
      Sometimes we don't want to show 2 options and we only want to do something
      if a condition is met, we can use the && operator here. We have a variable
      with the name Marc, if the name is Marc (and only in this case) we show a
      certain text
    </p>
    {myName && <p>Your name is Marc, amazing!</p>}
  </div>
);

export default ConditionalRendering;
