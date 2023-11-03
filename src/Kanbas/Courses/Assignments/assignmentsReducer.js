
import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
 
const initialState = {
  assignments: db.assignments,
  assignment: { title: "New Assignment", description: "New Assignment Description" },
};
 
const AssignmenstSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
 
        ...state.assignments,
        { ...action.payload, _id: new Date().getTime().toString() }
 
      ];
 
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});
 
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} = AssignmenstSlice.actions;
export default AssignmenstSlice.reducer;