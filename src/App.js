//REACT
import React from 'react';

//ROUTER
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PrivateRoute, AdminRoute, ProviderRoute } from './components';

//REDUX
import { connect } from 'react-redux';
import { alertActions, profileActions } from 'store/actions';

//VIEWS
import {
    GenericPages,
    AdminPages,
    ProviderPages,
    ClientPages,
    AuthPages
} from 'views';

//SWEETALERT
import SweetAlert from 'sweetalert2';

//initialise router
export const history = createBrowserHistory();

class App extends React.Component{
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            this.props.clearAlerts();
        });
        let { getProfile, uid } = this.props;
        if(uid){
            getProfile(uid)
        }
    }

    componentDidUpdate(){
        let { alert } = this.props;
        if(alert){
            SweetAlert.fire({
                toast: true,
                position: 'top-end',
                type: alert.type,
                title: alert.message,
                showConfirmButton: false,
                timer: 5000
            })
        }
    }

    render(){
        return (
            <>
                <Router history={history}>
                    <Route path="/" component={GenericPages} />
                    <Route path="/auth" component={AuthPages} />
                    <PrivateRoute path="/dashboard" component={ClientPages} />
                    <ProviderRoute path="/cp" component={ProviderPages} />
                    <AdminRoute path="/admin" component={AdminPages} />
                </Router>
            </>
        );
    }
}

export default connect(
    ({
        alert,
        auth: {uid}
    })=>({
        alert,
        uid
    })
    , 
    {
        clearAlerts: alertActions.clear,
        getProfile: profileActions.getProfile,
        removeProfile: profileActions.removeProfile
    }
)(App);
