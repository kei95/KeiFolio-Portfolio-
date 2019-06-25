import React, { Component } from "react";
import {Row, Col, Image} from 'react-bootstrap';
import Logo from '../../Logo-kei.jpg';
import './LoadingPage.css';
import {Animated} from 'react-animated-css';
import { any, number } from "prop-types";
import { Redirect } from "react-router";
import  MainPage from '../../MainPage'
import { NavLink } from "react-router-dom";

interface Props {

}

interface State {
    redirect: boolean;
    outAnimation: boolean;
}
 
class LoadingPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            redirect: false,
            outAnimation: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({redirect: true})
        },2500 + 1000 );

        setTimeout(() => {
            this.setState({outAnimation: true})
        },2500 );
    }

    componentWillMount(){
        clearTimeout()
    }

    render() {
        if(this.state.redirect){
            return (
                <Redirect to={'/MainPage'} />
            )
        }
        return(
            <Row className=" wrapper">
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </head>
                <Col className="m-auto" xs={5}>
                    <Row>
                        <Col className="m-auto p-0" xs={6}>
                            <Animated animationIn="zoomInLeft" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={1400} isVisible={this.state.outAnimation ? false : true}>
                                <Image className="logo" src={Logo} />
                            </Animated>
                        </Col>
                        <Col className="m-auto p-0" xs={6}>
                        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={1000}  animationInDuration={1400} animationOutDuration={1800} isVisible={this.state.outAnimation ? false : true} >
                            <span className="name">Kei</span>
                        </Animated>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
export default LoadingPage;