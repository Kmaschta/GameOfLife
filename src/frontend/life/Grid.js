import React, { PropTypes } from 'react';

import Cell from './Cell';

const max = (current, next) => (next > current ? next : current);
const maxCellsNumber = columns => columns.map(column => column.length).reduce(max, 0);

const Grid = ({ columns, size = 1 }) => {
    const width = `${columns.length * size}rem`;
    const height = `${maxCellsNumber(columns) * size}rem`;

    return (
        <div className="grid" style={{ width, height }}>
            {columns.map((column, i) =>
                <div key={i} className="column">
                    {column.map((cell, j) => <Cell key={j} {...cell} />)}
                </div>
            )}
        </div>
    );
};

Grid.propTypes = {
    columns: PropTypes.array.isRequired,
    size: PropTypes.number,
};

export default Grid;
