import React, { PropTypes } from 'react';

import Toggle from 'material-ui/Toggle';

const isString = input => typeof input === 'string';

const Indicator = ({ socket }) => {
    const gray = 'rgb(189, 189, 189)';
    const switchColor = () => {
        if (socket.error) return 'red';
        if (socket.loading) return 'orange';
        if (socket.connected) return 'green';

        return 'rgb(245, 245, 245)';
    };

    const label = () => {
        if (socket.connected) return 'Socket connected';
        if (socket.loading) return 'Socket connecting...';
        if (socket.error && isString(socket.error)) return `An error occured (${socket.error})`;
        if (socket.error) return 'An error occured';

        return 'Socket disconnected';
    };

    return (<Toggle
        label={label()}
        toggled={socket.connected}
        trackStyle={{ backgroundColor: gray }}
        trackSwitchedStyle={{ backgroundColor: gray }}
        thumbStyle={{ backgroundColor: switchColor() }}
        thumbSwitchedStyle={{ backgroundColor: switchColor() }}
    />);
};

Indicator.propTypes = {
    socket: PropTypes.object.isRequired,
};

export default Indicator;
