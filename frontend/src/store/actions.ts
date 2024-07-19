import { Dispatch } from 'redux';
import axios from 'axios';
import { FETCH_DATA_SUCCESS, DataActionTypes } from './actionTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './index';

// const SYMBOL = 'GOOG';

export const fetchData = (): ThunkAction<void, RootState, unknown, DataActionTypes> => async (dispatch: Dispatch<DataActionTypes>) => {
  try {
    const response = await axios.get('http://localhost:5000/api/data');
    console.log("response:-", response);
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
