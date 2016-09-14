import React, { PropTypes } from 'react';

import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Button from 'material-ui/RaisedButton';

const close = socket => () => {
    socket.instance.close();
};

const newGeneration = socket => () => {
    socket.instance.send('');
};

const Command = ({ game, socket, reconnect }) => (
    <CardActions>
        <FlatButton label={`Generation ${game.id + 1}`} />
        <Button label={'Connect'} primary={true} disabled={socket.connected} onClick={reconnect} />
        <Button label={'New Generation'} primary={true} disabled={!socket.connected} onClick={newGeneration(socket)} />
        <Button label={'Disconnect Socket'} secondary={true} disabled={!socket.connected} onClick={close(socket)} />
    </CardActions>
);

Command.propTypes = {
    game: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
    reconnect: PropTypes.func.isRequired,
};

export default Command;
