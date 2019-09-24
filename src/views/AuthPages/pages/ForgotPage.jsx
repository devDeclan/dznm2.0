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
    Row,
    Col,
} from 'reactstrap';
import { BeatLoader } from 'react-spinners';

import { authActions } from 'store/actions';

class ForgotPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
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

        const { email } = this.state;
        if (email) {
            this.props.sendReset(email);
        }
    }

    render() {
        const { running } = this.props;
        const { email } = this.state;
        return (
            <div className="container-fluid h-100vh d-flex bg-gradient-green justify-content-center">
                <Col lg="5" md="7" className="align-self-center">
                    <Card className="bg-secondary shadow border-0">
                        <CardBody className="px-lg-5 py-lg-4">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <label
                                    className="form-control-label"
                                    htmlFor="input-first-name"
                                >
                                    Enter your Email to send verification email
                                </label>
                                <InputGroup color="danger" className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="user@example.com" type="email" name="email" value={email} onChange={this.handleChange} required/>
                                    <InputGroupAddon addonType="append">
                                        <Button color="primary">
                                            {running?<BeatLoader size={10}/>:"send"}
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        <Col xs="6">
                            <Link
                                to="/auth/login"
                                className="text-light"
                                href="#pablo"
                            >
                                <small>Back to login</small>
                            </Link>
                        </Col>
                        <Col className="text-right" xs="6">
                            <Link
                                to="/auth/register"
                                className="text-light"
                                href="#pablo"
                            >
                                <small>Create new account</small>
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
    sendReset: authActions.sendReset
})(ForgotPage);
