export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any[];  
}

export type DataActionTypes = FetchDataSuccessAction;
