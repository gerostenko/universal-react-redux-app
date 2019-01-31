import React, { Component }  from 'react';
import PageNotFound from './components/PageNotFound';
import homepageStyles from './app.scss';
import { Link, Route, Switch } from 'react-router-dom';
import routes from './routes';

class App extends Component {
    constructor(props){
        super(props);
    }

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
                <Switch>
                    {routes.map((route, index) => <Route key={index} exact={route.exact} path={route.path} render={() => (<route.component data={this.props.data.payload}/>)} />)}
                    <Route path='*' exact={true} component={PageNotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;