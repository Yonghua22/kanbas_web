import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  addModule as addModuleAction,
  deleteModule as deleteModuleAction,
  updateModule as updateModuleAction,
  setModule as setModuleAction,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);

  const currentModule = useSelector((state) => state.modulesReducer.module);
  const modulesFromRedux = useSelector((state) => state.modulesReducer.modules); // Retrieve modules from Redux store
  const dispatch = useDispatch();
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModuleAction(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModuleAction(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModuleAction(module));
  };


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
              <button onClick={() => handleUpdateModule} className="btn btn-primary">
                Update
              </button>
              <button
                onClick={handleAddModule}
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
                  <button className="btn btn-danger" onClick={() => handleDeleteModule(module._id)}>
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



