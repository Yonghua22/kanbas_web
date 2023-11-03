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

// import React, { useState } from "react";

// import { useDispatch } from "react-redux";

// import { useNavigate, useParams, Link } from "react-router-dom";

// import db from "../../Database";

// import assignmentsReducer, { addAssignment, updateAssignment } from "./assignmentsReducer"; // Make sure to import the correct actions and reducers

// import { AiFillCheckCircle } from "react-icons/ai";
 
// function AssignmentEditor() {

//   const { assignmentId } = useParams();

//   // const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);

//   const [title, setTitle] = useState(assignment?.title || "");
//   const { assignment } = useSelector((state) => state.assignmentsReducer);
//   const [description, setDescription] = useState("");

//   // const [points, setPoints] = useState("");

//   // const [dueDate, setDueDate] = useState("");

//   // const [availableFrom, setAvailableFrom] = useState("");

//   // const [availableUntil, setAvailableUntil] = useState("");

//   const { courseId } = useParams();

//   const navigate = useNavigate();

//   const dispatch = useDispatch();
 
//   const handleSave = () => {

//     const updatedAssignment = {

//       ...assignment,

//       title,

//       description,

//       points: parseInt(points, 10), // Parse points as an integer

//       dueDate,

//       availableFrom,

//       availableUntil,

//     };
 
   

//       dispatch(updateAssignment(updatedAssignment)); // Make sure the action matches your Redux setup

    
 
 

//     navigate(`/Kanbas/courses/${courseId}/Assignments`);

//   };
 
//   return (

//     <div style={{ padding: "20px", height: "100vh" }}>

//       <button className="btn btn-asdf">

//         <AiFillCheckCircle color="green" /> Published

//       </button>

//       <h3>Assignment Name</h3>

//       <input

//         value={title}

//         onChange={(e) => setTitle(e.target.value)}

//         className="form-control mb-3"

//         placeholder="New Assignment"

//       />

//       <h3>New Assignment Description</h3>

//       <textarea

//         value={description}

//         onChange={(e) => setDescription(e.target.value)}

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

//             onChange={(e) => setPoints(e.target.value)}

//             className="form-control"

//             placeholder="100"

//           />

//         </div>

//         <div className="d-flex">

//           <h5>Assign</h5>

//           <div style={{ border: "1px solid #ccc", padding: "100px", width: "100%", borderRadius: "5px" }}>

//             <div className="mr-3 d-flex">

//               <h5>Due</h5>

//               <input type="date" className="form-control" onChange={(e) => setDueDate(e.target.value)} defaultValue="2023-11-15" />

//             </div>
 
//             <div className="d-flex mb-3">

//               <div className="mr-3">

//                 <h5>Available from</h5>

//                 <input type="date" className="form-control" onChange={(e) => setAvailableFrom(e.target.value)} defaultValue="2023-11-15" />

//               </div>
 
//               <div className="mr-3">

//                 <h5>Until</h5>

//                 <input type="date" className="form-control" onChange={(e) => setAvailableUntil(e.target.value)} defaultValue="2023-11-15" />

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
 
//       <div className="d-flex justify-content-end mt-3">

//         <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary mr-2">

//           Cancel

//         </Link>

//         <button onClick={handleSave} className="btn btn-danger">

//           Save

//         </button>

//       </div>

//     </div>

//   );

// }
 
// export default AssignmentEditor;
import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, selectAssignment } from "./AssignmentsReducer";
 
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { assignment } = useSelector((state) => state.AssignmentsReducer);
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const location = useLocation();
  const isNewAssignment = new URLSearchParams(location.search).get("isNewAssignment") === "true";
 
  const handleSave = () => {
    if (isNewAssignment) {
      // Add a new assignment
      const newAssignment = { ...assignment, course: courseId };
      dispatch(addAssignment(newAssignment));
    } else {
      // Update an existing assignment
      dispatch(updateAssignment(assignment));
    }
    // Navigate back to Assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  }
 
  return (
    <div style={{ padding: "20px", height: "100vh" }}>
      <div className="float-end">
        <button className="btn btn-light" style={{ color: "green" }}>
          <AiOutlineCheckCircle /> Published
        </button>
        <button className="btn btn-light">
          <PiDotsThreeVerticalBold />
        </button>
      </div>
 
      <div className="mb-3">
        <h5>Assignment Name</h5>
        <input
          className="form-control"
          value={assignment.title}
          onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))
          }
        />
        <textarea
          className="form-control"
          value={assignment.description}
          onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))
          }
        />
      </div>
 
      <div className="mb-3 d-flex align-items-center">
        <label htmlFor="assignment-points" className="me-2">Points:</label>
        <input
          id="assignment-points"
          value={assignment.points}
          className="form-control w-50"
          onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))
          }
        />
      </div>
 
      <div className="mb-1">
        <label htmlFor="dueDate" className="form-label">Due</label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={assignment.dueDate}
          onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))
          }
        />
        <label htmlFor="availableDate" className="form-label ms-2">Available from</label>
        <input
          type="date"
          className="form-control"
          id="availableDate"
          value={assignment.availableDate}></input>
        <label htmlFor="endDate" className="form-label ms-2">Until</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          value={assignment.endDate}></input>
      </div>
 
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger float-end">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2 float-end">
        Save
      </button>
    </div>
  );
}
 
export default AssignmentEditor;

