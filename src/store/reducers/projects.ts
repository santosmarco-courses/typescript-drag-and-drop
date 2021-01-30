import {
  CreateProjectAction,
  CREATE_PROJECT,
  MarkProjectAsActiveAction,
  MarkProjectAsFinishedAction,
  MARK_PROJECT_AS_ACTIVE,
  MARK_PROJECT_AS_FINISHED,
  ProjectsActionTypes,
} from "../actions/projects/types";
import { ProjectsState } from "./types";

const initialState: ProjectsState = [];

const addProject = (state: ProjectsState, action: CreateProjectAction) => [
  ...state,
  action.project,
];

const markProjectAsActive = (
  state: ProjectsState,
  action: MarkProjectAsActiveAction
) => {
  const currState = [...state];
  const project = currState.find((p) => p.id === action.id);
  if (!project) {
    return currState;
  }
  project.status = "active";
  return currState;
};

const markProjectAsFinished = (
  state: ProjectsState,
  action: MarkProjectAsFinishedAction
) => {
  const currState = [...state];
  const project = currState.find((p) => p.id === action.id);
  if (!project) {
    return currState;
  }
  project.status = "finished";
  return currState;
};

const reducer = (
  state = initialState,
  action: ProjectsActionTypes
): ProjectsState => {
  switch (action.type) {
    case CREATE_PROJECT:
      return addProject(state, action);
    case MARK_PROJECT_AS_ACTIVE:
      return markProjectAsActive(state, action);
    case MARK_PROJECT_AS_FINISHED:
      return markProjectAsFinished(state, action);
    default:
      return state;
  }
};

export default reducer;
