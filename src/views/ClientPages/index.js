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
                        innerLink: "/dashboard",
                        imgSrc: require("assets/img/brand/argon-react.png"),
                        imgAlt: "..."
                    }}
                />
                <div className="main-content" ref="mainContent">
                    <Navbar
                        {...this.props}
                    />
                    <div className="bg-lighter">
                        <Switch>
                            <Redirect to='/dashboard/index' from='/dashboard' exact={true}/>
                            <Route path='/dashboard/index' component={Dashboard}/>
                            <Route path='/dashboard/profile' component={Profile}/>
                            <Route path='/dashboard/courses' component={Courses}/>
                            <Route path='/dashboard/course' component={Course}/>
                        </Switch>
                    </div>
                    <Container fluid>
                        <Footer />
                    </Container>
                </div>
            </>
        );
    }
}

export default Provider;