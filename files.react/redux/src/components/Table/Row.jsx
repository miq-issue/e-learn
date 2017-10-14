import React, { PropTypes } from 'react';
import { generateKey } from '../../services/api';

import './Row.scss';

const Row = ({ item }) => (
  <tr>
    {Object.keys(item).map(prop => <td key={generateKey(6)}>{item[prop]}</td>)}
  </tr>
);

export default Row;

Row.defaultProps = {
    item: {},
};

Row.propsTypes = {
    item: PropTypes.object,
};
