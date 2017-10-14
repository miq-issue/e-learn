import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { isSortedData } from '../displayData/displayData.actions';

import './RowHeader.scss';

const mapStateToProps = state => ({
    isSortedAsc: state.displayData.isSortedAsc,
});

const mapDispatchToProps = dispatch => ({
    setSorted: (isSorted, fieldName) => {
        dispatch(isSortedData(isSorted, fieldName));
    },
});

// TODO remove handler off component
const RowHeader = ({ headers, setSorted, isSortedAsc }) => {
    const styleOptions = classnames(
        'table__header',
        { table__header_none: isSortedAsc === null,
            table__header_sortedAsc: isSortedAsc,
            table__header_sortedDsc: !isSortedAsc });
    return (
      <tr>
        {headers.map(item => (
          <th key={item}>
            <a
              href=""
              className={styleOptions}
              onClick={e => {
                e.preventDefault();
                setSorted(!isSortedAsc, item);
              }}
            >
              {item}
            </a>
          </th>
        ))}
      </tr>
    );
};

RowHeader.defaultProps = {
    headers: [],
};

RowHeader.propsTypes = {
    headers: PropTypes.arrayOf(PropTypes.string),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RowHeader);
