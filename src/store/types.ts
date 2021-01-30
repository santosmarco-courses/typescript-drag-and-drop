import { PeopleState, ProjectsState } from "./reducers/types";

export type RootState = {
  projects: ProjectsState;
  people: PeopleState;
};
