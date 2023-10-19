import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from "react-icons/fa";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  const buttonStyle = {
    backgroundColor: "lightgrey",
    color: "black",
    border: "0.1px",
    borderRadius: "5px",
    padding: "10px",
    marginRight: "3px", // Adjust the margin-right value to your preference
    cursor: "pointer",
  };
  const moduleStyle = {
    backgroundColor: "red",
    border: "0.1px",
    borderRadius: "5px",
    padding: "10px",
    marginRight: "3px", // Adjust the margin-right value to your preference
    cursor: "pointer",
  };

  // 动态生成列表项的数据
  const listItemsData = [
    { text: "Resources" },
    { text: "Required Textbook" },
    { text: "Week0 - INTRO" },
    { text: "Week1 - HTML" },
  ];

  return (
    <div >
      <div className="module-controls">
        <button style={buttonStyle} className="btn btn-primary">
          Collapse All
        </button>
        <button style={buttonStyle} className="btn btn-secondary">
          View Progress
        </button>
        <button style={buttonStyle} className="btn btn-success">
          <AiFillCheckCircle /> Publish All
        </button>
        <button style={moduleStyle} className="btn btn-danger">
          + Module <BsPlus />
        </button>
        <button style={buttonStyle} className="btn btn-danger">
          <FaEllipsisV />
        </button>
        <hr />
      </div>
      <div>
        <ul className="list-group">
          {listItemsData.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center bg-light p-4 mb-3"
            >
              <div className="d-flex align-items-center">
                <FaEllipsisV className="icon-spacing" />
                <GoTriangleRight />
                <span>{item.text}</span>
              </div>
              <div className="icon-container">
                <AiFillCheckCircle className="text-success icon-spacing" />
                <GoTriangleDown className="icon-spacing" />
                <BsPlus className="icon-spacing" />
                <FaEllipsisV />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ModuleList;
