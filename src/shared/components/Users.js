import React from 'react';
import {fetchUsers} from '../actions/userActions';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: []
        };
       
    }

    componentDidMount() {
        if (this.props.data.type !== 'Users') {
            fetchUsers().then(response => {
                this.setState({
                    payload: response
                });
            });
        }
        else {
            this.setState({
                payload: this.props.data.payload
            });
        }
    }

    render () {
        const userList = this.state.payload.map(user => <div key={user.id}><h3> {user.username}</h3> <p>{user.email}</p></div>);
        return <div>
                <h1>Users component</h1>
                {userList}
            </div>;
    }
}

export default Users;