
import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, selectAssignment } from "./assignmentsReducer";
 
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { assignment } = useSelector((state) => state.assignmentsReducer);
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