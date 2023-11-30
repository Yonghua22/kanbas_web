// import { configureStore } from "@reduxjs/toolkit";
// import modulesReducer from "../Courses/Modules/modulesReducer";


// // import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";  // 请更新为正确的路径


// const store = configureStore({
//   reducer: {
//     modulesReducer,  // 更改为明确的名字
//     // assignments: assignmentsReducer,
//   }
// });


// export default store;
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";

const store = configureStore({
  reducer: {
    modulesReducer
  }
});
export default store;