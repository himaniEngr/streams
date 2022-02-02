import _ from "lodash";
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";
import streams from "../apis/streams";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // console.log(action, "*************");
      const x = _.mapKeys(action.payload, (item) => item.id);
      return { ...state, ...x };
    case FETCH_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
