import React, { useEffect, useState } from "react";

const ApiCall = () => {
  let [githubData, setGithubData] = useState({});

  // useEffect hook come from React code so we need to follow it's rules. It is a method that accepts 2 parameters, first a function that will handle our API call and second an array that will determine how many times this code runs. Since we only want to run it one time at the begining, we will write it as an empty array.

  // We do the API call with fetch. We only need to write our api url and this will return a Promise. We need to resolve the promise with .then in order to get a response. From that response, we want to retrieve a json, so we use the .json() method that also returns a promise. We solve that promise with .then again finally retrieving the data we want. We store it in our state that was an empty object at the begining. Since this is a state change, it will trigger an automatic update in our UI and the api values will be displayed

  useEffect(() => {
    fetch("https://api.github.com/users/marcllopis")
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <div className="centered-content">
      <h1>
        This component is using the useEffect hook to call the Github api when
        page loads, store that info in our state and show it later
      </h1>

      <h3>Github info at: https://api.github.com/users/marcllopis</h3>
      <p>User name: {githubData.name}</p>
      <p>User location: {githubData.location}</p>
      <p>User number of followers: {githubData.followers}</p>
    </div>
  );
};

export default ApiCall;
