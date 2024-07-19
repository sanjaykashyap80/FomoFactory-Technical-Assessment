import { FETCH_DATA_SUCCESS, DataActionTypes } from './actionTypes';

export interface DataState {
  data: any[]; 
}

const initialState: DataState = {
  data: []
};

const reducer = (state = initialState, action: DataActionTypes): DataState => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
