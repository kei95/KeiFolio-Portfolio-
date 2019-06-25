import React, { Component } from 'react';
import { Navbar, Nav, Row, Col, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';
import { Animated } from 'react-animated-css';

interface Props{
    offsetForSc1: number;
    offsetForSc2: number;
    offsetForSc3: number;
    offsetForSc4: number;
}

interface State {
    isTop: boolean;
    currentPage: String;
}

class NavBar extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            isTop: true,
            currentPage: "Home",
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            if(window.pageYOffset === 0){
                this.setState({isTop: true})
            } else {
                this.setState({isTop: false})
            }
            switch (true) {
                case (window.pageYOffset < this.props.offsetForSc2): {
                    this.setState({currentPage: "Home"})
                    break;
                }case(window.pageYOffset < this.props.offsetForSc3 - 200): {
                    this.setState({currentPage: "About"})
                    break;
                }case(window.pageYOffset < this.props.offsetForSc3 + 1100): {
                    this.setState({currentPage: "Abilities"})
                    break;
                }case(window.pageYOffset > this.props.offsetForSc3 + 1100): {
                    this.setState({currentPage: "Contact"})
                    break;
                }
                    }
            console.log(this.state.currentPage)
        }
    }

    componentWillMount() {
        window.onscroll = null;
         
    }

    render(){
        return(
            <div className= {this.state.isTop ? "navParentTop" : "bg-light navParent"} style={{WebkitTransitionDuration: '0.5s', zIndex: 9999, position: "fixed", top: "0", width: "100%"}}>
                <Animated animationIn="slideInRight" animationInDuration={1400} animationOut="fadeOut" isVisible={true}>
                <div className='col-xl-9 mx-auto'>
                <Navbar  collapseOnSelect variant={this.state.isTop ? "dark" : "light"} expand="lg">
                    <Navbar.Brand href="#section_1"><h1 className={this.state.isTop ? undefined : "text-primary"} >KeiFolio</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#section_1">
                            <span className={this.state.isTop ? "text-white btn" : "text-primary btn"}  >
                                <h3 className={this.state.currentPage === 'Home' ? 'NavBtn' : "NavBtnIninit nav"} style={{}}>Home</h3>
                            </span>
                            </Nav.Link>
                            <Nav.Link href="#section_2">
                            <span  className={this.state.isTop ? "text-white btn" : "text-primary btn"}>
                            <h3 className={this.state.currentPage === 'About' ? 'NavBtn' : "NavBtnIninit nav"}  style={{}}>About</h3>
                            </span>
                            </Nav.Link>
                        <Nav.Link href="#section_3">
                            <span  className={this.state.isTop ? "text-white btn" : "text-primary btn"}>
                            <h3 className={this.state.currentPage === 'Abilities' ? 'NavBtn' : "NavBtnIninit nav"}  style={{}}>Abilities</h3>
                            </span>
                            </Nav.Link>
                            <Nav.Link href="#section_4">
                            <span  className={this.state.isTop ? "text-white btn" : "text-primary btn"}>
                            <h3 className={this.state.currentPage === 'Contact' ? 'NavBtn' : "NavBtnIninit nav"} style={{}}>Contact</h3>
                            </span>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                </div>
                </Animated>
            </div>
        );
    }
}

export default NavBar;