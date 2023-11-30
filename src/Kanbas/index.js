//import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  const [course, setCourse] = useState({objId: courses.length + 1,
    name: "Course Name", _id: "Course Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, course]);
  };
  const deleteCourse = async(id) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    if (window.confirm("Do you want to DELETE this Course?")) {
      setCourses(courses.filter((course) => course._id !== id));
      }
  };
  const updateCourse = async() => {    
    if (window.confirm("Do you want to UPDATE this Course?")) {
      const response = await axios.put(
        `${URL}/${course._id}`,
        course
      );
      console.log(response.data);
      setCourses(        
        courses.map((c) => {
          if (c._id === course._id) {            
            return course;            
          }
          return c;
        })
      );
    }
  }
  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div className="" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;