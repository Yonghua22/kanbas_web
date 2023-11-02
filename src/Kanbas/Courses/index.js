import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";

import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

import {HiBars3} from "react-icons/hi2";


function Courses({ courses }) {  // Accept courses as a prop
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, , id, screen] = pathname.split("/");
  
  // Find the course by its ID from the courses prop
  const course = courses.find(courseItem => courseItem._id === courseId);

  return (
    <div>
      <h3 style={{ color: 'red' }}>
        <HiBars3 className="wd-icon"/> {course && course.name} / {screen}
      </h3>
      <hr />
      <CourseNavigation />
      <div>
        <div 
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
