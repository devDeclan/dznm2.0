import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Col,
} from "reactstrap";

class TopicCard extends React.Component {
    render() {
        return (
            <>
                <Col xl="4" md="6" sm="12" className="p-2">
                    <Button
                        tag={Link}
                        to='/dashboard/course'
                        className="text-truncate"
                        block  
                    >
                        <i className="ni ni-collection" />
                        <span> Computer Orginisation adn architecture </span>
                    </Button>
                </Col>
            </>
        );
    }
}

export default TopicCard
