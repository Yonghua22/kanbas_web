import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { BsPlus } from 'react-icons/bs';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import { AiFillCheckCircle } from "react-icons/ai";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    
      
    <div>
      <div className="d-flex align-items-right justify-content-end mt-3" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px' }}>
      
      <button className="btn btn-asdf">
      <AiFillCheckCircle color="green" /> Published
      </button>


<button className="btn btn-light mr-2"><HiOutlineEllipsisVertical /></button>
<hr />
</div>



    <div className="d-flex align-items-right justify-content-end mt-3" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px' }}>
      
    <input value={assignment.title}
                 className="form-control mb-2" />
         
    </div>
    <div className="d-flex align-items-right justify-content-end mt-3" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px' }}>
      
    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className=" btn btn-secondary" >    
            Cancel
          </Link>
     
          <button onClick={handleSave} className="btn btn-danger me-2">
            Save
          </button>
           
      </div>
    
    </div>
  );
}


export default AssignmentEditor;