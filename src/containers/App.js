import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ping } from '../redux/modules/ping';
import { fetchUser } from '../redux/modules/user';

import { getUsers } from '../selectors/user';

class App extends Component {
    componentDidMount() {
      // this.props.fetchUser();
    }
    
    render() {
        const { users } = this.props;
        return (
            <div>
                <button onClick={() => this.props.fetchUser('quyenphamkhac')} >Fetch User</button>
                <ul>
                  {users.map(user => (
                    <li key={user.id}>{user.login}</li>
                  ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
    }
}

const mapDispatchToProps = {
    ping,
    fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);