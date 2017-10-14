export function displayDataRequestFetch() {
  return {
    type: 'FETCH_DISPLAYDATA_STARTED',
  };
}

export function fetchRequestFailed(error) {
  return {
    type: 'FETCH_DISPLAYDATA_FAILED',
    error: error.message,
  };
}

export function fetchRequestSuccess(datas) {
  return {
    type: 'FETCH_DISPLAYDATA_SUCCESS',
    datas,
  };
}

export function isSortedData(isSortedAsc, fieldName) {
  return {
    type: 'SORT_DISPLAYDATA',
    isSortedAsc,
    fieldName,
  };
}
