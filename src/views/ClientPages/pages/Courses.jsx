import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImg,
    Container,
    Row,
    Col
} from "reactstrap";
import { Link } from 'react-router-dom';
import { RegisteredCard } from "../components";

class Courses extends React.Component {
    render() {
        return (
            <>
                <div
                    className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                    style={{
                        backgroundImage:
                          "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        minHeight:"300px"
                    }}
                >
                    {/* Mask */}
                    <span className="mask bg-gradient-green opacity-8" />
                    {/* Header container */}
                    <Container className="d-flex align-items-center" fluid>
                        <Row>
                            <Col lg="12" md="10">
                                <h1 className="display-2 text-white">My Courses </h1>
                                <p className="text-white mt-0 mb-5">
                                    These are all the courses you have registered for. Happy damzimining.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt--7 pb-5 bg-lighter" fluid>
                    <Row>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>
                        <RegisteredCard/>

                    </Row>
                </Container>
            </>
        );
    }
}

export default Courses;
