import React from "react";
import {
    Container,
    Row,
    Button,
    ButtonGroup,
    Col,
    Collapse,
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TopicCard } from "../components";

class Course extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: 'hello world',
            topicsOpened: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleCollapse =this.toggleCollapse.bind(this);
    }

    handleChange(value) {
        this.setState({ content: value })
    }

    toggleCollapse() {
        this.setState({
            topicsOpened: !this.state.topicsOpened
        })
    }

    modules = {
        toolbar: null
    }
     
    formats = [
        'header', 'fonts', 'size', 'code-block', 'video',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'code', 'align', 'direction',
        'link', 'image', 'color','background', 'script'
    ]

    render() {
        let { topicsOpened } = this.state;
        return (
            <>
                <div
                    className="header pb-2 pt-5 pt-lg-7 d-flex align-items-center"
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
                        <Col>
                            <h1 className="text-white">CSCD 101</h1>
                            <h1 className="text-white">Introduction to Computer Science </h1>
                        </Col>
                        <Button
                            className="float-right"
                            onClick={this.toggleCollapse}
                        >
                            <i className="ni ni-collection"/>
                            <span>Topics</span>
                        </Button>
                    </Container>
                </div>
                <Collapse isOpen={topicsOpened}>  
                    <Container className="d-flex pt-2" fluid>
                        <Row>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                            <TopicCard/>
                        </Row>
                    </Container>
                </Collapse>
                <Container className="bg-lighter" fluid>
                    <Row className="h-100vh mx-lg--4 py-3">
                        <ReactQuill
                            theme="snow"
                            formats={this.formats}
                            modules={this.modules}
                            style={{
                                margin: 0,
                                padding: 0,
                                backgroundColor: 'white',
                                width: window.innerWidth
                            }}
                            value={this.state.content}
                            readOnly={true}
                        />
                    </Row>
                </Container>
                <Container className="pb-2 d-flex justify-content-end">
                        <Pagination>
                            <ButtonGroup>
                                <PaginationItem tag={Button}>
                                        Previous
                                </PaginationItem>
                                <PaginationItem tag={Button}>
                                        Next
                                </PaginationItem>
                            </ButtonGroup>
                        </Pagination>
                </Container>
            </>
        );
    }
}

export default Course;
