import React, { PropTypes } from 'react';

import Cell from './Cell';

const Grid = ({ matrix }) => (
    <div className="grid" style={{ flex: 1 }}>
        <div className="cell-container">
            {matrix.map((column, i) =>
                <div key={i} className="column">
                    {column.map((cell, j) => <Cell key={j} {...cell} />)}
                </div>
            )}
        </div>
    </div>
);

Grid.propTypes = {
    matrix: PropTypes.array.isRequired,
};

export default Grid;
