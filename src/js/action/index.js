 import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../constants/action-types';

export const fetchProductsBegin = (LoadingData) => ({
  type: FETCH_DATA_BEGIN,
  payload: LoadingData
});

export const fetchProductsSuccess = (metadata) => ({
  type: FETCH_DATA_SUCCESS,
  payload: metadata
});

export const fetchProductsError = error => ({
  type: FETCH_DATA_FAILURE,
  payload: error
});