import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { authActions } from 'store/actions';
import { connect } from 'react-redux';

import {
    Button,
    Collapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

class Sidebar extends React.Component {
    state = {
        collapseOpen: false
    };
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    
    toggleCollapse = () => {
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };

    closeCollapse = () => {
        this.setState({
            collapseOpen: false
        });
    };

    render() {
        const { logo } = this.props;
        let navbarBrandProps;
        if (logo && logo.innerLink) {
            navbarBrandProps = {
                to: logo.innerLink,
                tag: Link
            };
        } else if (logo && logo.outterLink) {
            navbarBrandProps = {
                href: logo.outterLink,
                target: "_blank"
            };
        }
        return (
            <Navbar
                className="navbar-vertical fixed-left navbar-light bg-white"
                expand="md"
                id="sidenav-main"
            >
                <Container fluid>
                    {/* Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.toggleCollapse}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Brand */}
                    {!logo ? (
                        <NavbarBrand className="pt-0" {...navbarBrandProps}>
                            <img
                                alt={logo.imgAlt}
                                className="navbar-brand-img"
                                src={logo.imgSrc}
                            />
                        </NavbarBrand>
                    ) : (
                        <NavbarBrand>
                            Damzinium Inc.
                        </NavbarBrand>
                    )}
                    {/* User */}
                    <Nav className="align-items-center d-md-none">
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav className="nav-link-icon">
                                <i className="ni ni-bell-55" />
                            </DropdownToggle>
                            <DropdownMenu
                                aria-labelledby="navbar-default_dropdown_1"
                                className="dropdown-menu-arrow"
                                right
                            >
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Something else here</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav>
                                <Media className="align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img
                                            alt="..."
                                            src={require("assets/img/theme/team-1-800x800.jpg")}
                                        />
                                    </span>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem className="noti-title" header tag="div">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </DropdownItem>
                                <DropdownItem to="/cp/profile" tag={Link}>
                                    <i className="ni ni-single-02" />
                                    <span>My profile</span>
                                </DropdownItem>
                                <DropdownItem to="/cp/profile" tag={Link}>
                                    <i className="ni ni-settings-gear-65" />
                                    <span>Settings</span>
                                </DropdownItem>
                                <DropdownItem to="/cp/messages" tag={Link}>
                                    <i className="ni ni-support-16" />
                                    <span>Support</span>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="ni ni-user-run" />
                                    <span>Logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* Collapse */}
                    <Collapse navbar isOpen={this.state.collapseOpen}>
                        {/* Collapse header */}
                        <div className="navbar-collapse-header d-md-none">
                            <Row>
                                {logo ? (
                                    <Col className="collapse-brand" xs="6">
                                        {logo.innerLink ? (
                                            <Link to={logo.innerLink}>
                                                <img alt={logo.imgAlt} src={logo.imgSrc} />
                                            </Link>
                                        ) : (
                                            <a href={logo.outterLink}>
                                                <img alt={logo.imgAlt} src={logo.imgSrc} />
                                            </a>
                                        )}
                                    </Col>
                                ) : null}
                                <Col className="collapse-close" xs="6">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        onClick={this.toggleCollapse}
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        {/* Form */}
                        <Form className="mt-4 mb-3 d-md-none">
                            <InputGroup className="input-group-rounded input-group-merge">
                                <Input
                                    aria-label="Search"
                                    className="form-control-rounded form-control-prepended"
                                    placeholder="Search"
                                    type="search"
                                />
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <span className="fa fa-search" />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                        {/* Navigation */}
                        <Nav navbar>
                            <NavItem>
                                <NavLink
                                    to="/cp/dashboard"
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-tv-2 text-primary" />
                                    Dashboard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to="/cp/profile"
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-single-02 text-primary" />
                                    Profile
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to="/cp/courses"
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-books text-primary" />
                                    Courses
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to="/cp/requests"
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-active-40 text-primary" />
                                    Requests
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to="/cp/messages"
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-email-83 text-primary" />
                                    Messages
                                </NavLink>
                            </NavItem>
                        </Nav>
                        {/* Divider */}
                        <hr className="my-3" />
                        <Button 
                            block
                            onClick={()=>this.props.logout()}
                        >
                            <i className="ni ni-user-run" />
                            <span>Logout</span>
                        </Button>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

Sidebar.propTypes = {
    logo: PropTypes.shape({
        innerLink: PropTypes.string,
        outterLink: PropTypes.string,
        imgSrc: PropTypes.string.isRequired,
        imgAlt: PropTypes.string.isRequired
    })
};

export default connect(()=>(null),{
    logout: authActions.logout
})(Sidebar);
