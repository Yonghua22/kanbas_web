
import{VscNotebook} from "react-icons/vsc";

import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsPlus } from 'react-icons/bs';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IoFillCheckCircle } from 'react-icons/io';
import "./index.css";
 
function Assignments() {

  const { courseId } = useParams();

  const assignments = db.assignments;

  const courseAssignments = assignments.filter(

    (assignment) => assignment.course === courseId);

  return (

    <div>

      <div className="d-flex align-items-center justify-content-between mt-3" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px' }}>

        <input

          type="text"

          className="form-control mr-2"

          placeholder="Search for Assignment"

          style={{ width: '200px', backgroundColor: '#f8f9fa', color: '#555', border: 'none' }}

        />

        <div className="d-flex">

          <button className="btn btn-light mr-2"><BsPlus /> Group</button>
          
          <Link to="../Assignments/A101">
          <button className="btn btn-danger">
          <BsPlus /> Assignment
          </button>
          </Link>

          <button className="btn btn-light mr-2"><HiOutlineEllipsisVertical /></button>

        </div>

      </div>

      <hr />

      <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between' }}>

        <div className="d-flex align-items-center">

          <div style={{ marginRight: '5px' }}>

            <IoEllipsisVerticalSharp />

          </div>

          <span>&#9660;</span>

          <div style={{ marginLeft: '5px' }}>ASSIGNMENTS</div>

        </div>

        <div className="d-flex">

          <button className="btn btn-secondary btn-sm">40% of Total</button>

          <BsPlus style={{ marginLeft: '10px' }} />

          <HiOutlineEllipsisVertical />

        </div>

      </div>

 

      <div className="list-group">

        {courseAssignments.map((assignment) => (

          <Link

            key={assignment._id}

            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}

            className="list-group-item d-flex justify-content-between align-items-center"

          >

            <div>

              <IoEllipsisVerticalSharp style={{ marginRight: '5px' }} />

              <VscNotebook style={{ marginRight: '5px', color: 'green' }} />

              {assignment.title}

            </div>

            <div className="d-flex">

              <AiFillCheckCircle style={{ marginRight: '5px', color: 'green' }} />

              <IoEllipsisVerticalSharp />

            </div>

          </Link>

        ))}

      </div>

    </div>

  );

}

export default Assignments;