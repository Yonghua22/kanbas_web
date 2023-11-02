import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule as addModuleAction,
  deleteModule as deleteModuleAction,
  updateModule as updateModuleAction,
  setModule as setModuleAction,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const currentModule = useSelector((state) => state.modulesReducer.module);
  const modulesFromRedux = useSelector((state) => state.modulesReducer.modules); // Retrieve modules from Redux store
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ul className="list-group mt-5">
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <input
                value={currentModule.name}
                onChange={(e) => dispatch(setModuleAction({ ...currentModule, name: e.target.value }))}
                className="form-control mb-2"
                placeholder="New Module"
              />
              <input
                value={currentModule.description}
                onChange={(e) => dispatch(setModuleAction({ ...currentModule, description: e.target.value }))}
                className="form-control"
                placeholder="New Description"
              />
            </div>

            <div className="col-auto">
              <button onClick={() => dispatch(updateModuleAction(currentModule))} className="btn btn-primary">
                Update
              </button>
              <button 
                onClick={() => dispatch(addModuleAction({ ...currentModule, course: courseId }))}
                className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </li>
        <div>
          {modulesFromRedux
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item position-relative">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                <p>{module._id}</p>
                <div className="col-auto position-absolute top-0 end-0">
                  <button className="btn btn-danger" onClick={() => dispatch(deleteModuleAction(module._id))}>
                    Delete
                  </button>
                  <button className="btn btn-success" onClick={() => dispatch(setModuleAction(module))}>
                    Edit
                  </button>
                </div>
              </li>
            ))}
        </div>
      </ul>
    </div>
  );
}

export default ModuleList;
