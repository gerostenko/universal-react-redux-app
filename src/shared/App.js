import React, { Component }  from 'react';
import homepageStyles from './app.scss';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <div className={ homepageStyles.component }>
                    <p>Testing the SASS</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Users</Link></li>
                        <li><Link to='/posts'>Posts</Link></li> 
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default App;