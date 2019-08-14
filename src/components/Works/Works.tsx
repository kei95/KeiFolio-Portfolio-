import React, { Component } from 'react';
import './Works.css';
import reactDOM from 'react-dom';
import { Carousel, CardDeck, Card, Button } from 'react-bootstrap';
import Youtube from 'react-youtube';
import MyArt from '../../MyArt1.jpg';
import MyArt2 from '../../MyArt2.jpg';
import MyArt3 from '../../MyArt3.jpeg';
import Card1 from '../../ProjectMS.jpg';
import Card2 from '../../DrinkerPicker.jpg';
import Card3 from '../../HireMe.jpg';
import Card4 from '../../Base.jpg';

interface Props {
    getOffsetsFromSctions: any;
}
class Works extends Component<Props> {

    _onReady(event: any) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    componentDidMount() {
        var rect = reactDOM.findDOMNode(this)
        this.props.getOffsetsFromSctions(rect.offsetTop)
    }

    render() {
        const opts = {
            playerVars: {
                autoplay: 1
            }
        };
        return (
            <div>

                <div className="Title-Ability" >
                    <span style={{ textAlign: 'center', fontSize: '3rem' }}>Projects</span>
                    <p className="Discription-Ability" >Projects that I worked/work on.</p>
                    <div style={{ alignContent: 'center' }} className="Border-Ability" />
                </div>



                <div className="Cards-Container col-xl-9 mx-auto">
                    <CardDeck>
                        <Card className="card">
                            <div className="box-shadows">
                                <Card.Img className=" CardImage " variant="top" src={Card1} />
                                <Card.Body>
                                    <Card.Title>ProjectMS</Card.Title>
                                    <Card.Text>
                                        Desktop app that aims to increase productivity and focus.
                                        It provides relaxing music and motivational quotes with an
                                        adjustable timer.
                            </Card.Text>
                                    <a href="https://github.com/kei95/ProjectMS">
                                        <Button variant="primary">Chack the app</Button>
                                    </a>
                                </Card.Body>
                            </div>
                        </Card>

                        <Card>
                            <div className="box-shadows">
                                <Card.Img className=" CardImage " variant="top" src={Card2} />
                                <Card.Body>
                                    <Card.Title>DrinkerPicker</Card.Title>
                                    <Card.Text>
                                        Mobile game(Number picker) designed for a small number
                                        of people to use in a party setting for fun. made by
                                        React Native.
                            </Card.Text>
                                    <a href="https://github.com/kei95/DrinkerPicker-ReactNaive-">
                                        <Button variant="primary">Chack the app</Button>
                                    </a>
                                </Card.Body>
                            </div>
                        </Card>

                        <Card>
                            <div className="box-shadows">
                                <Card.Img className=" CardImage " variant="top" src={Card3} />
                                <Card.Body>
                                    <Card.Title>HireMe</Card.Title>
                                    <Card.Text>
                                        Mobile app to keep track of your resume that you sent to company/organization.
                                        made by Java(Android studio).
                            </Card.Text>
                                    <a href="https://github.com/Rtihai/HireMe">
                                        <Button variant="primary">Chack the app</Button>
                                    </a>
                                </Card.Body>
                            </div>
                        </Card>
                    </CardDeck>

                    <div style={{marginTop: '3rem'}} className="box-shadows">
                            <Card.Img className=" CardImage " variant="top" src={Card4} />
                            <Card.Body>
                                <Card.Title>Base</Card.Title>
                                <Card.Text>
                                A scalable software that is offered to around 1,000 users. available for both web and mobile.
                            </Card.Text>
                                <a href="https://base.cm/">
                                    <Button variant="primary">Chack the app</Button>
                                </a>
                            </Card.Body>
                        </div>
                    
                </div>

                <div className="Title-Ability" >
                    <span style={{ textAlign: 'center', fontSize: '3rem' }}>Works</span>
                    <p className="Discription-Ability" >Works that I love and proud of.</p>
                    <div style={{ alignContent: 'center' }} className="Border-Ability" />
                </div>

                <Carousel interval={null as any}>
                    <Carousel.Item>
                        <img
                            className="Slids d-block w-100"
                            src={MyArt}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 style={{ fontStyle: 'Italic' }}>Seascape</h2>
                            <p>Honolulu, Hwaii</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="Slids d-block w-100"
                            src={MyArt2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 style={{ fontStyle: 'Italic' }}>Memory in Summer</h2>
                            <p>Kyoto, Japan</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="Slids d-block w-100"
                            src={MyArt3}
                            alt="Third slide"
                        />
                        <Carousel.Caption >
                            <div className="backgroundWork">
                                <h2 style={{ fontStyle: 'Italic' }}>Venus</h2>
                                <p>Vancouver, Canada</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Works;