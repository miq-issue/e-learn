const initState = {
    status: '',
    isSortedAsc: null,
    fieldName: '',
    table: [],
};

export default function displayDataReducer(state = initState, action) {
    switch (action.type) {
    case 'FETCH_DISPLAYDATA_STARTED':
        return {
            ...state,
            status: 'fetching',
        };
    case 'FETCH_DISPLAYDATA_FAILED':
        return {
            ...state,
            error: action.error,
        };
    case 'FETCH_DISPLAYDATA_SUCCESS':
        return {
            ...state,
            status: 'success',
            table: action.datas,
        };
    case 'SORT_DISPLAYDATA':
        return {
            ...state,
            isSortedAsc: action.isSortedAsc,
            fieldName: action.fieldName,
        };
    default:
        return state;
    }
}
