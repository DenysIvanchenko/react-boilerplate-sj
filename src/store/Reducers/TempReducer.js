import {
  INITIAL,
} from '../Types/TempTypes';

const initialState = {
  datas: [1,2,3],
};

export default function TempReducer(state = initialState, action) {
  switch (action.type) {
    case INITIAL:
      return {
        ...state,
        datas: [1,2,3,4]
      };
    default:
      return state;
  }
}