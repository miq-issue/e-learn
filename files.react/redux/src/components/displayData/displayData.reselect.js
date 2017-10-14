import { createSelector } from 'reselect';

const getTableData = state =>
  state.displayData.table;

const getTableSortField = state =>
  state.displayData.fieldName;

const getIsSortedAsc = state =>
  state.displayData.isSortedAsc;

const getList = createSelector(
  getTableData,
  getTableSortField,
  getIsSortedAsc,
  (list, field, isSortedAsc) => {
    let result = [];
    const fieldName = field.toLowerCase();
    if (isSortedAsc === null) return list;
    if (isSortedAsc) {
      result = list.sort((item1, item2) => {
        if (item1[fieldName] > item2[fieldName]) { return 1; }
        if (item1[fieldName] < item2[fieldName]) { return -1; }
        return 0;
      });
    } else {
      result = list.sort((item1, item2) => {
        if (item1[fieldName] < item2[fieldName]) { return 1; }
        if (item1[fieldName] > item2[fieldName]) { return -1; }
        return 0;
      });
    }
    return result;
  },
);

export default getList;