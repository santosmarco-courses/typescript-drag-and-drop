import uniqid from "uniqid";
import { Project } from "../../../types";
import {
  CreateProjectAction,
  CREATE_PROJECT,
  MarkProjectAsActiveAction,
  MarkProjectAsFinishedAction,
  MARK_PROJECT_AS_ACTIVE,
  MARK_PROJECT_AS_FINISHED,
} from "./types";

export const createProject = (
  projectData: Omit<Project, "id" | "status">
): CreateProjectAction => ({
  type: CREATE_PROJECT,
  project: { ...projectData, id: uniqid(), status: "active" },
});

export const markProjectAsActive = (
  projectId: string
): MarkProjectAsActiveAction => ({
  type: MARK_PROJECT_AS_ACTIVE,
  id: projectId,
});

export const markProjectAsFinished = (
  projectId: string
): MarkProjectAsFinishedAction => ({
  type: MARK_PROJECT_AS_FINISHED,
  id: projectId,
});
