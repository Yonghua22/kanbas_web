import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect hooks
import axios from "axios"; // Importing axios for making HTTP requests

function WorkingWithObjects() {
    // State for holding assignment object
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const URL = 'http://localhost:8000/a5/assignment'; // Base URL for API requests

    // Function to fetch assignment data from server
    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data); // Update state with fetched data
    };

    // Function to update the title of the assignment
    const updateTitle = async () => {
        const response = await axios.get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data); // Update state with updated data
    };

    // useEffect hook to fetch assignment data on component mount
    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div>
            <h3>Working With Objects</h3> {/* Title of the component */}

            <h4>Modifying Properties</h4> {/* Subtitle for modifying properties */}
            {/* Link to update the assignment title */}
            <a href={`${URL}/title/${assignment.title}`} className="btn btn-primary me-2 float-end">
                Update Title
            </a>
            {/* Input field to change the title in the state */}
            <input onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                value={assignment.title}
                className="form-control mb-2 w-75"
                type="text" />
            {/* Button to update the title on the server */}
            <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
                Update Title to: {assignment.title}
            </button>
            {/* Button to fetch the latest assignment from the server */}
            <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
                Fetch Assignment
            </button>

            <h4>Retrieving Objects</h4> {/* Subtitle for retrieving objects */}
            {/* Link to get the assignment object */}
            <a href="http://localhost:8000/a5/assignment" className="btn btn-primary me-2">
                Get Assignment
            </a>

            <h4>Retrieving Properties</h4> {/* Subtitle for retrieving specific properties */}
            {/* Link to get the title of the assignment */}
            <a href="http://localhost:8000/a5/assignment/title" className="btn btn-primary me-2">
                Get Title
            </a>
        </div>
    );
}

export default WorkingWithObjects; // Export the component