import React from 'react';

class Users extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render () {
        const userList = this.props.users.map(user => <div key={user.id}><h3> {user.username}</h3> <p>{user.email}</p></div>);
        return <div>
                <h1>Users component</h1>
                {userList}
            </div>;
}
}

export default Users;