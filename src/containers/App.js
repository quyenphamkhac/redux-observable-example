import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ping } from '../redux/modules/ping';
import { fetchUser } from '../redux/modules/user';

class App extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.fetchUser('quyenphamkhac')} >Fetch User</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pingState: state.ping,
    }
}

const mapDispatchToProps = {
    ping,
    fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);