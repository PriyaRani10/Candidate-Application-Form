export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

export const FILTER_DATA_SUCCESS = 'FILTER_DATA_SUCCESS';

export const filterDataSuccess = (filterData) => ({
  type: FILTER_DATA_SUCCESS,
  payload: filterData
});

export const IS_FILTERED = 'IS_FILTERED';

export const Isfilter = (IsfilterData) => ({
  type: IS_FILTERED,
  payload: IsfilterData
});



