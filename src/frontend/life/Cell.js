import React, { PropTypes } from 'react';

const Cell = ({ state }) => <div className={`cell ${state}`} />;

Cell.propTypes = {
    state: PropTypes.string.isRequired,
};

export default Cell;
