import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import getList from './displayData.reselect';
import RowHeader from '../Table/RowHeader';
import Rows from '../Table/Rows';

import './DisplayData.scss';

const mapStateToProps = state => ({
    sortFiled: state.displayData.fieldName,
    isSorted: state.displayData.isSortedAsc,
    sortedData: getList(state),
});

const headerNames = [
    'email',
    'first_name',
    'gender',
    'id',
    'last_name',
];

const DisplayData = ({ sortFiled, isSorted, sortedData }) => {
    return (
      <div>
        <table className="display__data">
          <RowHeader headers={headerNames} />
          <Rows data={sortedData} />
        </table>
      </div>
    );
};

export default connect(
  mapStateToProps,
)(DisplayData);

DisplayData.defaultProps = {
    tableData: [],
};

DisplayData.propsTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object),
};
