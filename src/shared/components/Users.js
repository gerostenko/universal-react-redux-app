import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersRequest } from '../actions/userActions';

class Users extends React.Component {
    componentDidMount() {
        if(this.props.users.length === 0) {
            this.props.fetchUsers();
        }
    }

    renderUsers(users) {
        return users.map(user => <div key={user.id}><h3> {user.username}</h3> <p>{user.email}</p></div>);
    }

    render () {
        return <div>
                <h1>Users component</h1>
                 {this.renderUsers(this.props.users)}  
            </div>;
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsersRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

export function getUsersData(store) {
    return store.dispatch(fetchUsersRequest());
}