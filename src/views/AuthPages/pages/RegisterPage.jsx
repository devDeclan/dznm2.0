import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Input,
    Button,
    Card,
    CardBody,
    CardHeader,
    Row,
    Col,
} from 'reactstrap';
import { BeatLoader } from 'react-spinners';

import { authActions } from 'store/actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;
        if (email && password) {
            this.props.register(email, password);
        }
    }

    render() {
        const { running, loginGoogle } = this.props;
        const { email, password } = this.state;
        return (
            <div className="container-fluid h-100vh d-flex bg-gradient-green justify-content-center">
                <Col lg="5" md="7" className="align-self-center">
                    <Card className="bg-secondary shadow border-0">
                        <CardHeader className="bg-transparent pb-4">
                            <div className="text-muted text-center mt-2 mb-3">
                                <small>Sign up with</small>
                            </div>
                            <div className="btn-wrapper text-center">
                                <Button
                                    className="btn-neutral btn-icon"
                                    color="default"
                                    href="#pablo"
                                    onClick={e => {e.preventDefault(); loginGoogle()}}
                                >
                                    <span className="btn-inner--icon">
                                        <img
                                        alt="..."
                                        src={require("assets/img/icons/common/google.svg")}
                                        />
                                    </span>
                                    <span className="btn-inner--text">Google</span>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-4">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className="text-muted text-center mb-4">
                                    <small>Or Sign up with</small>
                                </div>
                                <InputGroup color="danger" className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="user@example.com" type="email" name="email" value={email} onChange={this.handleChange} required/>
                                </InputGroup>
                                <InputGroup color="danger" className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="password" type="password" name="password" value={password} onChange={this.handleChange} required/>
                                </InputGroup>
                                <div className="text-center">
                                    <Button className="my-4" color="primary">
                                        {running?<BeatLoader size={10}/>:"sign up"}
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        <Col xs="6">
                            <Link
                                to="/auth/forgot"
                                className="text-light"
                                href="#pablo"
                            >
                                <small>Forgot password?</small>
                            </Link>
                        </Col>
                        <Col className="text-right" xs="6">
                            <Link
                                to="/auth/login"
                                className="text-light"
                                href="#pablo"
                            >
                                <small>Already have an account</small>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default connect(
    ({
        state:{running}
    })=>({
        running
    })
,{
    register: authActions.register,
    loginGoogle: authActions.loginGoogle
})(RegisterPage);