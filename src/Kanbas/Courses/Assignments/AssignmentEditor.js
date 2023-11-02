// import React, {useState} from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../Database";
// import assignmentsReducer, { updateAssignment } from "./assignmentsReducer";
// import { AiFillCheckCircle } from "react-icons/ai";
// function AssignmentEditor() {
//   const { assignmentId } = useParams();
//   const assignment = db.assignments.find(
//     (assignment) => assignment._id === assignmentId
//   );
//   const [title, setTitle] = useState(assignment?.title || "");
//   const [description, setDescription] = useState("");
//   const [points, setPoints] = useState("");
//   const [assignDate, setAssignDate] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [availableFrom, setAvailableFrom] = useState("");
//   const [availableUntil, setAvailableUntil] = useState("");
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const [add, addAssignment] = useState("");
//   const dispatch = useDispatch();
//   const isNewAssignment = new URLSearchParams(window.location.search).get("isNewAssignment") === "true";
//   const handleSave = () => {
//     if(isNewAssignment){
//     const newAssignment = {...assignment, course: courseId};
//     console.log("Adding a new assignment:", newAssignment);
//     dispatch(addAssignment({...assignment, course: courseId}));
//   }else{
//     dispatch(updateAssignment(assignment));
//   }navigate(`/Kanbas/courses/${courseId}/Assignments`);

//   // const updateAssignment = (state, action) => {
//   //   const updatedAssignmentIndex = state.assignments.findIndex(
//   //     (a) => a._id === action.payload._id
//   //   );

//   //   if (updatedAssignmentIndex !== -1) {
//   //     state.assignments[updatedAssignmentIndex] = action.payload;
//   //   }
//   // };
//   };

//   return (
//     <div style={{ padding: "20px", height: "100vh" }}>
//       <button className="btn btn-asdf">
//         <AiFillCheckCircle color="green" /> Published
//       </button>
//       <h3>Assignment Name</h3>
//       <input 
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         className="form-control mb-3"
//         placeholder="New Assignment"
//       />
//       <h3>New Assignment Description</h3>
//       <textarea 
//         value={description}
//         onChange={e => setDescription(e.target.value)}
//         className="form-control mb-3" 
//         rows="4"
//         placeholder="New Assignment Description"
//       ></textarea>
      
//       <div className="mb-3">
//         <div className="mr-3 d-flex">
//           <h5>Points</h5>
//           <input 
//             type="number"
//             value={points}
//             onChange={e => setPoints(e.target.value)}
//             className="form-control" 
//             placeholder="100"
//           />
//         </div>
//         <div className = "d-flex">
//         <h5>Assign</h5>
//         {/* 这部分添加了一个框包裹起来 */}
//         <div style={{border: '1px solid #ccc', padding: '100px', width: '100%', borderRadius: '5px'}}>

          
//           <div className="mr-3 d-flex">
//             <h5>Due</h5>
//             <input 
//               type="date" 
//               className="form-control"
//               onChange = {e => setDueDate(e.target.value)}
//               defaultValue="2023-11-15"
//             />
//           </div>
          
//           <div className="d-flex mb-3">
//             <div className="mr-3">
//               <h5>Available from</h5>
//               <input 
//                 type="date" 
//                 className="form-control"
//                 onChange = {e => setAvailableFrom(e.target.value)}
//                 defaultValue="2023-11-15"
//               />
//             </div>

//             <div className="mr-3">
//               <h5>Until</h5>
//               <input 
//                 type="date" 
//                 className="form-control"
//                 onChange = {e => setAvailableUntil(e.target.value)}
//                 defaultValue="2023-11-15"
//               />
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>

//       <div className="d-flex justify-content-end mt-3">
//         <Link 
//           to={`/Kanbas/Courses/${courseId}/Assignments`}
//           className="btn btn-secondary mr-2"
//         >
//           Cancel
//         </Link>
//         <button 
//           onClick={handleSave} 
//           className="btn btn-danger"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AssignmentEditor;

import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate, useParams, Link } from "react-router-dom";

import db from "../../Database";

import assignmentsReducer, { addAssignment, updateAssignment } from "./assignmentsReducer"; // Make sure to import the correct actions and reducers

import { AiFillCheckCircle } from "react-icons/ai";
 
function AssignmentEditor() {

  const { assignmentId } = useParams();

  const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);

  const [title, setTitle] = useState(assignment?.title || "");

  const [description, setDescription] = useState("");

  const [points, setPoints] = useState("");

  const [dueDate, setDueDate] = useState("");

  const [availableFrom, setAvailableFrom] = useState("");

  const [availableUntil, setAvailableUntil] = useState("");

  const { courseId } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();
 
  const handleSave = () => {

    const updatedAssignment = {

      ...assignment,

      title,

      description,

      points: parseInt(points, 10), // Parse points as an integer

      dueDate,

      availableFrom,

      availableUntil,

    };
 
   

      dispatch(updateAssignment(updatedAssignment)); // Make sure the action matches your Redux setup

    
 
 

    navigate(`/Kanbas/courses/${courseId}/Assignments`);

  };
 
  return (

    <div style={{ padding: "20px", height: "100vh" }}>

      <button className="btn btn-asdf">

        <AiFillCheckCircle color="green" /> Published

      </button>

      <h3>Assignment Name</h3>

      <input

        value={title}

        onChange={(e) => setTitle(e.target.value)}

        className="form-control mb-3"

        placeholder="New Assignment"

      />

      <h3>New Assignment Description</h3>

      <textarea

        value={description}

        onChange={(e) => setDescription(e.target.value)}

        className="form-control mb-3"

        rows="4"

        placeholder="New Assignment Description"

      ></textarea>
 
      <div className="mb-3">

        <div className="mr-3 d-flex">

          <h5>Points</h5>

          <input

            type="number"

            value={points}

            onChange={(e) => setPoints(e.target.value)}

            className="form-control"

            placeholder="100"

          />

        </div>

        <div className="d-flex">

          <h5>Assign</h5>

          <div style={{ border: "1px solid #ccc", padding: "100px", width: "100%", borderRadius: "5px" }}>

            <div className="mr-3 d-flex">

              <h5>Due</h5>

              <input type="date" className="form-control" onChange={(e) => setDueDate(e.target.value)} defaultValue="2023-11-15" />

            </div>
 
            <div className="d-flex mb-3">

              <div className="mr-3">

                <h5>Available from</h5>

                <input type="date" className="form-control" onChange={(e) => setAvailableFrom(e.target.value)} defaultValue="2023-11-15" />

              </div>
 
              <div className="mr-3">

                <h5>Until</h5>

                <input type="date" className="form-control" onChange={(e) => setAvailableUntil(e.target.value)} defaultValue="2023-11-15" />

              </div>

            </div>

          </div>

        </div>

      </div>
 
      <div className="d-flex justify-content-end mt-3">

        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary mr-2">

          Cancel

        </Link>

        <button onClick={handleSave} className="btn btn-danger">

          Save

        </button>

      </div>

    </div>

  );

}
 
export default AssignmentEditor;
