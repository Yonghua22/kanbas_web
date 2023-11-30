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
import { updateModule }from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const currentModule = useSelector((state) => state.modulesReducer.module);
  const modulesFromRedux = useSelector((state) => state.modulesReducer.modules); // Retrieve modules from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);


  // const handleAddModule = () => { 
  //   client.createModule(courseId, module).then((module) => {
  //     dispatch(addModuleAction(module));
  //   });
  // };
  const handleAddModule = () => { 
    client.createModule(courseId, currentModule).then((module) => {
      dispatch(addModuleAction(module));
    });
  };
  
  

  // const handleDeleteModule = (moduleId) => {
  //   client.deleteModule(moduleId).then((status) => {
  //     dispatch(deleteModuleAction(moduleId));
  //   });
  // };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      console.log('Delete status:', status);
      dispatch(deleteModuleAction(moduleId));
    });
  };

  // const handleUpdateModule = async () => {
  //   const status = await client.updateModule(module);
  //   dispatch(updateModuleAction(module));
  // };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(currentModule);
    console.log('Update status:', status);
    dispatch(updateModuleAction(currentModule));
  };
  // const handleUpdateModule = async () => {
  //   console.log('Updating module:', currentModule);
  //   const status = await client.updateModule(currentModule);
  //   console.log('Update status:', status);
  //   dispatch(updateModuleAction(currentModule));
  // };
//   const handleUpdateModule = async () => {
//   console.log('Updating module:', currentModule);
//   const status = await client.updateModule(currentModule);
//   console.log('Update status:', status);
//   dispatch(updateModuleAction(currentModule));
// };
  // const handleUpdateModule = async () => {
  //   try {
  //     console.log('Updating module:', currentModule);
  //     const updatedModule = await client.updateModule(currentModule);
  //     console.log('Update status:', updatedModule);
  //     dispatch(updateModuleAction(updatedModule));
  //   } catch (error) {
  //     console.error('Error updating module:', error);
  //     // Handle the error as needed, e.g., show a message to the user
  //   }
  // };

  

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



