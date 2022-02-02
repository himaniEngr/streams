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
    case FETCH_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...streams, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
