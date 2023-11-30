import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-a5-i2ot.onrender.com/api/courses";
const MODULES_URL = "https://kanbas-node-server-app-a5-i2ot.onrender.com/api/modules";
export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
export const createModule = async (courseId, module) => {...};
export const findModulesForCourse = async (courseId) => {...};