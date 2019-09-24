import React from 'react';
import { connect } from 'react-redux';
import {
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Input,
    Button,
    Card,
    CardBody,
    Col,
} from 'reactstrap';
import qs from 'qs';
import { BeatLoader } from 'react-spinners';

import { authActions } from 'store/actions';

class ResetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: '',
            password: '',
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.prev = this.props.location.state;
    }

    handleChange(e) {
        e.preventDefault();
        const { pass, password } = this.state;
        const { name, value } = e.target;
        if(password!==pass){
            //this.setState({error: true})
        }else{
            this.setState({error: null})
        }
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const {oobCode} = qs.parse(this.props.location.search);
        const { pass, password } = this.state;
        if (pass && password) {
            this.props.resetPassword(pass, oobCode, this.prev);
        }
    }

    render() {
        const { running } = this.props;
        const { pass, password } = this.state;
        return (
            <div className="container-fluid h-100vh d-flex bg-gradient-green justify-content-center">
                <Col lg="5" md="7" className="align-self-center">
                    <Card className="bg-secondary shadow border-0">
                        <CardBody className="px-lg-5 py-lg-4">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className="text-primary text-center mb-4">
                                    <b>Create New Password</b>
                                </div>
                                <InputGroup color="danger" className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="enter new password" type="password" name="pass" value={pass} onChange={this.handleChange} required/>
                                </InputGroup>
                                <InputGroup color="danger" className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="repeat password" type="password" name="password" value={password} onChange={this.handleChange} required/>
                                </InputGroup>
                                {this.state.error?<small>Passwords do not match</small>:null}
                                <div className="text-center">
                                    <Button className="my-4" color="primary">
                                        {running?<BeatLoader size={10}/>:"change password"}
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
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
    resetPassword: authActions.resetPassword
})(ResetPage);
