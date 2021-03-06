import { FiltersValueProps, ActionType } from "../pages/Homepage/types";
import { timestamp } from "../helpers/index";

export const initialState = {
  locale: "pt_BR",
  country: "BR",
  timestamp: timestamp,
  limit: 5,
  offset: 1,
};

export function reducer(state: FiltersValueProps, action: ActionType) {
  switch (action.type) {
    case "locale":
      return {
        ...state,
        locale: action.payload,
      };
    case "country":
      return {
        ...state,
        country: action.payload,
      };
    case "timestamp":
      return {
        ...state,
        timestamp: action.payload,
      };
    case "limit":
      return {
        ...state,
        limit: action.payload,
      };
    case "offset":
      return {
        ...state,
        offset: action.payload,
      };
    default:
      throw new Error();
  }
}
