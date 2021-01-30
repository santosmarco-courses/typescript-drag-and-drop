import { PeopleActionTypes } from "../actions/people/types";
import { createPerson } from "./../../utils/createPerson";
import { PeopleState } from "./types";

const initialState: PeopleState = [
  createPerson("Marco", "Director", "Executive", "#64113F"),
  createPerson("Mariana", "Manager", "Sales", "#DE4D86"),
  createPerson("Gladstone", "Assistant", "Financial", "#F29CA3"),
  createPerson("Roberto", "Developer", "PD", "#F7CACD"),
  createPerson("Rodrigo", "Developer", "PD", "#84E6F8"),
  createPerson("Humberto", "Developer", "PD", "#779BE7"),
];

const reducer = (state = initialState, _: PeopleActionTypes): PeopleState => {
  /*
  switch (action.type) {
    default:
      return state;
  }
  */
  return state;
};

export default reducer;
