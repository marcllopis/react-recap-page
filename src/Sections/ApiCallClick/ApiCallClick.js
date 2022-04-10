import React, { useState } from "react";

const ApiCallClick = () => {
  let [starWarsData, setStarWarsData] = useState({});
  let [apiLoaded, setApiLoaded] = useState(false);

  // Same concept of API call as shown before. We add the logic of a boolean that will be displayed as true when the api call is finally resolved and stored in the state.

  const starWarsCall = () => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setStarWarsData(data);
        setApiLoaded(true);
      });
  };

  return (
    <div className="centered-content">
      <h1>Another example of an API call, now on a button click</h1>
      <h3>
        After clicking the button, an API call to here:
        https://swapi.dev/api/people/ is done. As you can see, this returns an
        object with a property named results that is an array of objects with
        all characters. We will iterate over that array to display all of them.
        We also control when the API is loaded through a boolean in our state.
      </h3>
      <button onClick={starWarsCall}>Give me Star Wars</button>
      {apiLoaded &&
        // We know that this info is inside of an array of objects so we use the map method to iterate over that array and return some html for each of them. We also use the index inside map method to display is as the key
        starWarsData.results.map(function (item, index) {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <h3>{item.gender}</h3>
              <p>
                {item.height}cm and {item.mass} kg
              </p>
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default ApiCallClick;
