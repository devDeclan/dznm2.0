import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import { Navbar, Footer, Sidebar } from "./components";
import { Profile, Dashboard, Courses, Course } from "./pages";

class Provider extends React.Component {
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
    }
    render() {
        return (
            <>
                <Sidebar
                    {...this.props}
                    logo={{
                        innerLink: "/admin/index",
                        imgSrc: require("assets/img/brand/argon-react.png"),
                        imgAlt: "..."
                    }}
                />
                <div className="main-content" ref="mainContent">
                    <Navbar
                        {...this.props}
                    />
                    <Switch>
                        <Redirect to='/cp/index' from='/cp' exact={true}/>
                        <Route path='/cp/index' component={Dashboard}/>
                        <Route path='/cp/profile' component={Profile}/>
                        <Route path='/cp/courses' component={Courses}/>
                        <Route path='/cp/course' component={Course}/>
                    </Switch>
                    <Container fluid>
                        <Footer />
                    </Container>
                </div>
            </>
        );
    }
}

export default Provider;