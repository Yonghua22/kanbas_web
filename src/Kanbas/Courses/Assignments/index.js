import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentsReducer";
import CourseNavigation from "../CourseNavigation";
 import { HiBars3 } from "react-icons/hi2";
 
function Assignments() {
  const { courseId } = useParams();
  // const assignments = db.assignments;
  const { assignments } = useSelector((state) => state.assignmentsReducer);
  const { assignment } = useSelector((state) => state.assignmentsReducer);
  const dispatch = useDispatch();
  
 
  return (
   <div>
      <h3 style={{ color: 'red' }}>
        <HiBars3 className="wd-icon"/> {assignment && assignment.name} / {assignment._id}
      </h3>
      <hr />
  <div className="d-flex align-items-center">
    {/* Content from CourseNavigation */}
   
    <CourseNavigation />
   

    <div className="ml-3">
      <div className="d-flex align-items-center">
        <input
          type="text"
          className="form-control w-50"
          defaultValue="Search for Assignment"
        />
        <button className="btn btn-light ms-2">
          <PiDotsThreeVerticalBold />
        </button>
        <button className="btn btn-light ms-2">
          <AiOutlinePlus /> Group
        </button>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor?isNewAssignment=true`}
          className="btn btn-danger ms-2">
          <AiOutlinePlus /> Assignment
        </Link>
      </div>
      <hr />
      <div className="wd-courses-assignments list-group">
        {assignments
          .filter((assignment) => assignment.course === courseId)
          .map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              {assignment.title}
              <button
                navigate={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}
                className="btn btn-success float-end ms-2"
                onClick={() => dispatch(selectAssignment(assignment))}>
                Edit
              </button>
              <button
                className="btn btn-danger float-end ms-2"
                onClick={() => dispatch(deleteAssignment(assignment._id))}>
                Delete
              </button>
            </Link>
          ))}
      </div>
    </div>
  </div>
</div>

  );
}
export default Assignments;