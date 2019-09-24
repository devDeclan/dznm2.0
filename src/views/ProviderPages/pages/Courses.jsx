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
                    <span className="mask bg-gradient-default opacity-8" />
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
                <Container className="mt--7 pb-5 bg-dark" fluid>
                    <Row>
                        <Col xl="4" className="mb-5">
                            <Card className="shadow">
                                <CardImg
                                    top
                                    width="100%"
                                    alt="Danziiiiii"
                                    src={require('assets/img/theme/profile-cover.jpg')}
                                />
                                <CardBody className="bg-transparent">
                                    <Row className="align-items-center">
                                        <div className="col">
                                        <h5 className="text-uppercase text-muted ls-1 mb-1">
                                            CSCD 101
                                        </h5>
                                        <h2 className="mb-0">
                                            Introduction to computer science
                                        </h2>
                                        </div>
                                    </Row>
                                </CardBody>
                                <CardFooter className="bg-transparent">
                                    <Button
                                        block
                                        tag={Link}
                                        to='/cp/course'    
                                    >
                                        <i className="ni ni-collection" />
                                        <span>View</span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        
                    </Row>
                </Container>
            </>
        );
    }
}

export default Courses;
