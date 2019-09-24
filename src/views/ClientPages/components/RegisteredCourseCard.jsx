import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardFooter
} from "reactstrap";

class CourseCard extends React.Component {
    render() {
        return (
            <>
                <Col  xl={4} lg={6} md={8} sm={10} xs={12} className="mb-5">
                    <Card className="shadow">
                        <button className="delete-me">
                            <i className="ni ni-collection" />
                        </button>
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
                                <h3 className="mb-0">
                                    Introduction to computer science
                                </h3>
                                </div>
                            </Row>
                        </CardBody>
                        <CardFooter className="bg-transparent">
                            <Button
                                block
                                tag={Link}
                                to='/dashboard/course'    
                            >
                                <i className="ni ni-collection" />
                                <span>Study</span>
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            </>
        );
    }
}

export default CourseCard
