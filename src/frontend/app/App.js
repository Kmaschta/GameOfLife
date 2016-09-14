import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import Grid from '../life/Grid';
import Command from '../life/Command';
import SocketIndicator from '../socket/Indicator';
import initSocketFactory from '../socket/initSocket';

const loaderStyle = {
    position: 'relative',
    top: 0,
    left: 'calc(50% - 45px)',
};

class App extends Component {
    componentDidMount() {
        this.props.initSocket('ws://localhost:8000');
    }

    render() {
        const { socket, game, initSocket } = this.props;
        const loading = socket.loading || !game.matrix.length;

        const reconnect = () => {
            initSocket('ws://localhost:8000');
        };

        return (
            <MuiThemeProvider>
                <Card>
                    <CardTitle title="Game of Life" subtitle={<SocketIndicator socket={socket} />} />
                    {loading && <div className="loading-wrapper">
                        <RefreshIndicator size={70} status="loading" style={loaderStyle} />
                    </div>}
                    {!loading && <CardText><Grid matrix={game.matrix} /></CardText>}
                    <Command game={game} socket={socket} reconnect={reconnect} />
                </Card>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    game: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
    initSocket: PropTypes.func.isRequired,
};

const mapPropsToProps = store => store;
const mapDispatchToProps = dispatch => ({
    initSocket: initSocketFactory(dispatch),
});

export default connect(mapPropsToProps, mapDispatchToProps)(App);
