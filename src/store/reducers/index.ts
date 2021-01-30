import { combineReducers } from "redux";
import peopleReducer from "./people";
import projectsReducer from "./projects";

export default combineReducers({
  projects: projectsReducer,
  people: peopleReducer,
});
