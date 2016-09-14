/* eslint-disable max-len */
import React from 'react';
import Grid from '../life/Grid';

const states = ['empty', 'alive', 'newborn', 'dying', 'oneshot'];

const cell = () => ({ state: states[Math.floor(Math.random() * states.length)] });
const columns = [
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
    [cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell(), cell()],
];

const Root = () => <Grid columns={columns} />;

export default Root;
