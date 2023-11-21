import React, { useEffect, useState } from "react"; // Importing React and the useState, useEffect hooks from React library.
import axios from "axios"; // Importing axios, a promise-based HTTP client for making requests.

function EncodingParametersInURLs() { // Declaration of the EncodingParametersInURLs functional component.
  const [a, setA] = useState(34); // State variable 'a' with initial value 34, and function 'setA' to update its value.
  const [b, setB] = useState(23); // State variable 'b' with initial value 23, and function 'setB' to update its value.
  const [welcome, setWelcome] = useState(""); // State variable 'welcome' for storing the welcome message, initially empty.

  // Async function to fetch a welcome message from a server.
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:8000/a5/welcome"); // Makes an HTTP GET request to the specified URL.
    setWelcome(response.data); // Sets the 'welcome' state variable with the data received from the response.
  };

  // useEffect hook to call fetchWelcome once the component mounts.
  useEffect(() => {
    fetchWelcome();
  }, []); // The empty dependency array [] ensures this effect runs only once after the initial render.

  const [result, setResult] = useState(0); // State variable 'result' to store calculation results, initially 0.

  // Async function to fetch the sum of 'a' and 'b' from a server.
  const fetchSum = async (a, b) => {
    const response = await axios.get(`http://localhost:8000/a5/add/${a}/${b}`); // Makes an HTTP GET request to add 'a' and 'b'.
    setResult(response.data); // Updates the 'result' state variable with the response data.
  };

  // Async function to fetch the subtraction result of 'a' and 'b' from a server.
  const fetchSubtraction = async (a, b) => {
    const response = await axios.get(`http://localhost:8000/a5/subtract/${a}/${b}`); // Makes an HTTP GET request to subtract 'b' from 'a'.
    setResult(response.data); // Updates the 'result' state variable with the response data.
  };

  // The JSX returned by the component for rendering.
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>

      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

      <h4>Calculator</h4>
      {/* // Input fields for 'a' and 'b', with onChange handlers to update their respective state variables. */}
      <input onChange={(e) => setA(e.target.value)} className="form-control" type="number" value={a} />
      <input onChange={(e) => setB(e.target.value)} className="form-control" type="number" value={b} />
      {/* // Input field to display the result, read-only. */}
      <input value={result} className="form-control mb-2" type="number" readOnly />

      <h3>Fetch Result</h3> /
      {/* // Button to fetch the sum, calling fetchSum on click. */}
      <button onClick={() => fetchSum(a, b)} className="btn btn-primary mb-2  w-100">
        Fetch Sum of {a} + {b}
      </button>
      {/* // Button to fetch the subtraction result, calling fetchSubtraction on click. */}
      <button onClick={() => fetchSubtraction(a, b)} className="btn btn-danger me-2 w-100">
        Fetch Subtraction of {a} - {b}
      </button>

      <h3>Path Parameters</h3>
      {/* // Anchor tags with href attributes dynamically created to show how path parameters can be used in URLs. */}
      <a href={`http://localhost:8000/a5/add/${a}/${b}`} className="btn btn-primary">Add {a} + {b}</a>
      <a href={`http://localhost:8000/a5/subtract/${a}/${b}`} className="btn btn-danger">Subtract {a} - {b}</a>

      <h3>Query Parameters</h3>
      {/* // Anchor tags with href attributes dynamically created to show how query parameters can be used in URLs. */}
      <a href={`http://localhost:8000/a5/calculator?operation=add&a=${a}&b=${b}`} className="btn btn-primary">Add {a} + {b}</a>
      <a href={`http://localhost:8000/a5/calculator?operation=subtract&a=${a}&b=${b}`} className="btn btn-danger">Subtract {a} - {b}</a>
    </div>
  );
}

export default EncodingParametersInURLs; // Exports the component for use in other parts of the application.