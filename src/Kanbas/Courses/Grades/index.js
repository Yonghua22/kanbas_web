import React from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";
import {CiKeyboard} from "react-icons/ci";
import { HiDownload, HiUpload, HiOutlineCog } from 'react-icons/hi';
import { HiSearch, HiOutlineFilter } from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
      <div>
        <h5 style={{ color: 'red', marginRight: '10px' }}>Gradebook</h5>
      </div>
      <CiKeyboard style={{ color: 'red', marginLeft: 'auto', marginRight: 'auto' }} />

      <div>

        <button className="btn btn-light"><HiDownload /> Import</button>
        <button className="btn btn-light"><HiUpload /> Export</button>
        <button className="btn btn-light"><HiOutlineCog /></button>

      </div>

    </div>

    <div className="d-flex mb-3">
      <div className="me-4">
        <h6>Student Names</h6>
        <div className="input-group">
          <span className="input-group-text"><HiSearch /></span>
          <select className="form-select" aria-label="Search Student">
            <option value="">Search Student</option>
            <option value="student1">Student 1</option>
            <option value="student2">Student 2</option>
          </select>
        </div>
      </div>
      <div className="me-4">

        <h6>Assignment Names</h6>

        <div className="input-group">

          <span className="input-group-text"><HiSearch /></span>

          <select className="form-select" aria-label="Search Assignments">

            <option value="">Search Assignments</option>

            <option value="assignment1">Assignment 1</option>

            <option value="assignment2">Assignment 2</option>

          </select>

        </div>

      </div>

    </div>

    <div className="d-flex mb-3 align-items-center" style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>

      <span className="me-2"><HiOutlineFilter /></span>

      <button className="btn btn-secondary btn-sm">Apply Filters</button>

    </div>

    <div className="table-responsive">

  <table className="table table-striped">

    <thead className="bg-light">

      <tr>

        <th>Student Name</th>

        {assignments.map((assignment) => (

          <th key={assignment._id}>{assignment.title}</th>

        ))}

      </tr>

    </thead>

    <tbody>

      {enrollments.map((enrollment) => {

        const user = db.users.find((user) => user._id === enrollment.user);

        return (

          <tr key={user._id}>

            <td>{user.firstName} {user.lastName}</td>

            {assignments.map((assignment) => {

              const grade = db.grades.find(

                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);

              return (

                <td key={assignment._id}>

                  {grade?.grade || ""}

                </td>

              );

            })}

          </tr>

        );

      })}

    </tbody>

  </table>

</div>

 

    </div>

    );

}

export default Grades;