import React, { Component } from 'react';
import reactDOM from 'react-dom';
import './Cards.css';
import { Row, Col, Image } from 'react-bootstrap';
import Card4 from '../../Cards_myself.png';
import IconHtml from './Icons/Icon-html.png';
import IconCss from './Icons/Icon-css.png';
import IconJs from './Icons/Icon-JS.png';
import IconTs from './Icons/Icon-ts.png';
import IconReact from './Icons/Icon-react.png';
import IconSwift from './Icons/Icon-swift.png';
import IconGit from './Icons/Icon-git.png';
import IconJava from './Icons/Icon-java.png';
import IconBs from './Icons/Icon-bs.png';

interface Props {
    getOffsetsFromSctions: any;
}

class Cards extends Component<Props> {

    componentDidMount() {
        var rect = reactDOM.findDOMNode(this)
    this.props.getOffsetsFromSctions(rect.offsetTop)
    }

    render() {
        return(
            <div className="Cards-Container col-xl-9 mx-auto">
                <div className="MyselfCard">
                    <Row>
                        <Col xs={12}>
                            <div className="box-shadow">
                            <h1 style={{textAlign: 'center'}}>AboutMe</h1>
                            <div style={{alignContent: 'center'}} className="Border-top" />
                                <Row>
                                    <Col md={6} className="contant-left">
                                        <Row>
                                            <Col xs={6} md={5}>
                                            <Image  className="ImageMyself " src={Card4} rounded />
                                            </Col>
                                            <Col xs={6} md={7}>
                                            <span className="Status">Name: </span><p className="Status-detail" >Kei Yamahsita</p>
                                            <span className="Status">Position: </span><p className="Status-detail" >Front-end Developer</p>
                                            <span className="Status">Email: </span><p className="Status-detail" >kei0613shine.star@gmail.com</p>
                                            </Col>
                                        </Row>

                                        <Row>
                                                <Col xs={12} className="Skils">
                                                <p className="Title-right">Skills</p>
                                                <div className="Border" />
                                                </Col>

                                                <Col xs={2}>
                                                    <Image className=" skillLogo" src={IconHtml} />
                                                </Col>
                                                <Col className="d-flex align-items-center" xs={2}>
                                                    <span className="SkillTitle" >HTML</span>
                                                </Col>
                                                
                                                <Col xs={2}>
                                                    <Image className=" skillLogo" src={IconCss} />
                                                </Col>
                                                <Col className="d-flex align-items-center" xs={2}>
                                                    <span className="SkillTitle" >CSS</span>
                                                </Col>

                                                <Col className="colLonger" xs={2}>
                                                    <Image className=" skillLogo" src={IconJs} />
                                                </Col>
                                                <Col style={{right:'2rem'}} className=" d-flex align-items-center " xs={2}>
                                                    <span className=" SkillTitleJs" >JavaScript</span>
                                                </Col>
                                            </Row>

                                            <Row className="skillsWrapper">
                                                <Col xs={2}>
                                                    <Image className=" skillLogo" src={IconReact} />
                                                </Col>
                                                <Col className="d-flex align-items-center" xs={2}>
                                                    <span className="SkillTitle" >React<br />(Native)</span>
                                                </Col>
                                                
                                                <Col xs={2}>
                                                    <Image className=" skillLogo" src={IconSwift} />
                                                </Col>
                                                <Col className="d-flex align-items-center" xs={2}>
                                                    <span className="SkillTitle" >Swift</span>
                                                </Col>

                                                <Col className="colLonger" xs={2}>
                                                    <Image className=" skillLogo" src={IconTs} />
                                                </Col>
                                                <Col style={{right:'2rem'}} className=" d-flex align-items-center " xs={2}>
                                                    <span className=" SkillTitleJs" >TypeScript</span>
                                                </Col>
                                            </Row>

                                            <Row className="skillsWrapper">
                                                <Col xs={2}>
                                                    <Image className=" skillLogo" src={IconBs} />
                                                </Col>
                                                <Col style={{right: '0.3rem'}} className="d-flex align-items-center" xs={2}>
                                                    <span className="SkillTitle" >Bootstrap</span>
                                                </Col>
                                                
                                                <Col style={{left: '0.7rem'}}  xs={2}>
                                                    <Image className=" skillLogo" src={IconJava} />
                                                </Col>
                                                <Col  className="d-flex align-items-center" xs={2}>
                                                    <span className="SkillTitle" >Java</span>
                                                </Col>

                                                <Col style={{right: '1rem'}} xs={2}>
                                                    <Image className=" skillLogo" src={IconGit} />
                                                </Col>
                                                <Col style={{right: '1.5rem'}} className="d-flex align-items-center" xs={2}>
                                                    <span  className="SkillTitle" >Git</span>
                                                </Col>
                                            </Row>

                                    </Col>
                                    <Col className="contant-right" md={6}>
                                        
                                        <p className="AboutMe">I am Kei(pronounce as the alphabet of K), Coffee lover Living in Vancouver since Oct 2017.
                                        I have a passion for creating something that can move people's heart. 
                                        I believe that my work makes somebody's life better someday.</p>
                                        <p className="AboutMe">I love creation and knowing new things or technology to improve my works and myself.  
                                        Facing new ideas or things makes me excited all the time.
                                        All that I want to know is everything gets me excited and makes my life better. 
                                        Until the day I get satisfied on the bed of the hospital, my curiosity never stops.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>


        );
    }
}
export default Cards