
// import axios from "axios";

// const API_BASE = process.env.REACT_APP_API_BASE;
// // const API_BASE = `http://localhost:4000/api`;
// const COURSES_URL = `${API_BASE}/courses`;
// // const COURSES_URL = `https://kanbas-node-server-app-2-a2ae.onrender.com/api/courses`;
// const MODULES_URL = `${API_BASE}/modules`;

// export const findModulesForCourse = async (courseId) => {
//   console.log('FinModulereducer')
//   const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
//   return response.data;
// }

// export const createModule = async (courseId, newModule) => {
//   const response = await axios.post(`${COURSES_URL}/${courseId}/modules`,
//       newModule);
//   return response.data;
// }

// export const addWeekToModule = async (courseId, newWeek) => {
//   const response = await axios.post(`${COURSES_URL}/${courseId}/modules/weeks`,
//       newWeek);
//   return response.data;
// }

// export const deleteModuleFromDB = async (moduleId, index) => {
//   const response = await axios.delete(`${MODULES_URL}/${moduleId}/${index}`);
//   return response.data;
// }

// export const updateModule = async (moduleId, index, newWeek) => {
//   const response = await axios.put(`${MODULES_URL}/${moduleId}/${index}`,
//       newWeek);
//   return response.data;
// }

import axios from "axios";
// const API_BASE = process.env.REACT_APP_API_BASE;
// const MODULES_URL = `${API_BASE}/modules`;
// const COURSES_URL = `${API_BASE}/courses`;
const COURSES_URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules";
 
// A5: 4.3.1 Retrieving Modules for a Course
export const findModulesForCourse = async (courseId) => {
  const response = await axios
      .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
 
// A5: 4.3.2 Creating Modules for a Course
export const createModule = async (courseId, module) => {
  const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
  );
  return response.data;
};
 
// A5: 4.3.3 Deleting a module
export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
 
// A5: 4.3.4 Update module
export const updateModule = async (moduleId, module) => {
  const response = await axios.put(`${MODULES_URL}/${moduleId}`, module);
  return response.data;
};