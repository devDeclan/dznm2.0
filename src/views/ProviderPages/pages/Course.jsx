import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Course extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
          
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
          
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
          
            ['link', 'image', 'video'],
            ['clean']
        ],
    }
     
    formats = [
        'header', 'fonts', 'size', 'code-block', 'video',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'code', 'align', 'direction',
        'link', 'image', 'color','background', 'script'
    ]

    render() {
        return (
            <>
                <div
                    className="header pb-2 pt-5 pt-lg-7 d-flex align-items-center"
                    style={{
                        backgroundImage:
                        "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        minHeight:"30px"
                    }}
                >
                    {/* Mask */}
                    <span className="mask bg-gradient-default opacity-8" />
                    {/* Header container */}
                    <Container className="d-flex align-items-center" fluid>
                        <Row>
                            <Col lg="12" md="10">
                                <h1 className="text-white">CSCD 101 - Introduction to Computer Science </h1>
                                <h4 className="text-white mt-0 mb-5">
                                    These are all the courses you have registered for. Happy damzimining.
                                </h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="p-0 pt-1 bg-white sticky-top sticky-bottom" fluid>
                    <Row className="h-100vh pt-1 pb-1">
                        <Col md={3} className="bg-dark">
                            <Row className="pt-3">
                                <Col>
                                    <i className="ni ni-collection"/>
                                    <span>Topics</span>
                                </Col>
                                <Col>
                                    <i className="ni ni-bold-left float-right"/>
                                </Col>
                            </Row>
                            <div>
                                
                            </div>
                        </Col>
                        <Col>
                            <ReactQuill
                                theme="snow"
                                modules={this.modules}
                                formats={this.formats}
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    height: window.innerHeight - 50
                                }}
                                value={this.state.text}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Course;
