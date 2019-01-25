import React, { Component }  from 'react';

import Users from './components/Users';
import Posts from './components/Posts';
import PageNotFound from './components/PageNotFound';

class App extends Component {
    constructor(props){
        super(props);
        this.createComponent = this.createComponent.bind(this);
    }

    createComponent() {
        let payload = this.props.data.payload;
        switch(this.props.data.componentToRender) {
            case 'Users':
                return <Users users={payload}/>;
            case 'Posts':
                return <Posts posts={payload}/>;
            default:
                return <PageNotFound />;
        }
    }

    render() {
        return (
            <div>
                { this.createComponent() }
            </div>
        );
    }
}

export default App;