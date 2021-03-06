import React, { Component } from 'react';
import reactDOM from 'react-dom';
import './FirstPage.css';
import { Row, Col } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

interface Props {
    getOffsetsFromSctions: any;
}

class FirstPage extends Component<Props> {


    componentDidMount() {
        var rect = reactDOM.findDOMNode(this)
        this.props.getOffsetsFromSctions(rect.offsetTop)
    }


    render() {
        return (
            <div className="wrapper">
                <Animated className="col-12 animation-Wrapper" animationInDelay={250} animationIn="fadeIn" animationInDuration={1200} animationOut="fadeOut" isVisible={true}>
                <Row className="FirstPageContainer">
                    <Col className="ml-5 p-0 Content" xs={12} md={7}>
                        <Animated className="col-12 animation-Wrapper" animationInDelay={500} animationIn="slideInLeft" animationInDuration={1200} animationOut="fadeOut" isVisible={true}>
                            <p className="m-0 Title-Firstpg">Hello World</p>
                        </Animated>
                    </Col>
                </Row>
                </Animated>
            </div>
        );
    }
}
export default FirstPage;