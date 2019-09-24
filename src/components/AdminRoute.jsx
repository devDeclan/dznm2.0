import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authConstants } from 'store/constants';
import { swithRoutes } from 'helpers';

const AdminRoute = ({ component: Component, loggedIn, role, ...rest }) => {
    return(
    <Route {...rest} render={props => (
        loggedIn?
            (role===authConstants.ADMIN_ROLE?
                <Component {...props} />
                :
                <Redirect to={swithRoutes(role)}/>
            ):(
                <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
            )
        )} 
    />
)}

export default connect(
    ({
        auth: {loggedIn},
        profile: {role}
    })=>({
        loggedIn,
        role
    })
)(AdminRoute)