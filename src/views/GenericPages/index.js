import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage } from './pages';

class GenericPages extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect from="/" exact={true} to="/home"/>
                <Route path="/home" exact={true} component={HomePage}/>
                <Route path="/about" exact={true} component={AboutPage}/>
                <Route path="/contact" exact={true} component={ContactPage}/>
            </Switch>
        );
    }
}

export default GenericPages;
