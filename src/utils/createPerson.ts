import uniqid from "uniqid";
import { Person, PersonDept, PersonRole } from "../types";

export const createPerson = (
  name: string,
  role: PersonRole,
  dept: PersonDept,
  color: string
): Person => ({
  id: uniqid(),
  name,
  role,
  dept,
  color,
});
