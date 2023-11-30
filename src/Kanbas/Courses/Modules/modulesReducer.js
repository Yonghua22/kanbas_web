import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  modules: [],
  module: { name: "New Module 123", description: "New Description" },
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    addModule: (state, action) => {
      state.modules = [         { ...action.payload, _id: new Date().getTime().toString() },           ...state.modules,       ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    // updateModule(state, action) {
    //   state.modules = state.modules.map((module) => {
    //     if (module._id === action.payload.moduleId) {
    //       return {
    //         ...module,
    //         weeks: [
    //           ...module.weeks.slice(0, action.payload.index),
    //           action.payload.week,
    //           ...module.weeks.slice(action.payload.index + 1),
    //         ]
    //       }
    //     }
    //     return module;
    //   });
    // },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;

