import React, { PropTypes } from 'react';
import Row from './Row';

const Rows = ({ data }) => (
  <tbody>
    {data.map(item => <Row key={item.id} item={item} />)}
  </tbody>
);

Rows.defaultProps = {
    props: {
        data: [],
    },
};

Rows.propsTypes = {
    props: {
        data: PropTypes.arrayOf(PropTypes.object),
    },
};

export default Rows;
