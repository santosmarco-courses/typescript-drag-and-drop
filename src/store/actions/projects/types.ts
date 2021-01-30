import { Project } from "../../../types";

export const CREATE_PROJECT: "CREATE_PROJECT" = "CREATE_PROJECT";
export const MARK_PROJECT_AS_ACTIVE: "MARK_PROJECT_AS_ACTIVE" =
  "MARK_PROJECT_AS_ACTIVE";
export const MARK_PROJECT_AS_FINISHED: "MARK_PROJECT_AS_FINISHED" =
  "MARK_PROJECT_AS_FINISHED";

export type CreateProjectAction = {
  type: typeof CREATE_PROJECT;
  project: Project;
};

export type MarkProjectAsActiveAction = {
  type: typeof MARK_PROJECT_AS_ACTIVE;
  id: string;
};

export type MarkProjectAsFinishedAction = {
  type: typeof MARK_PROJECT_AS_FINISHED;
  id: string;
};

export type ProjectsActionTypes =
  | CreateProjectAction
  | MarkProjectAsActiveAction
  | MarkProjectAsFinishedAction;
