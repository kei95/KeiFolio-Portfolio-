import React, { Component } from 'react';
import './Works.css';
import reactDOM from 'react-dom';
import { Carousel, CardDeck, Card } from 'react-bootstrap';
import Youtube from 'react-youtube';
import MyArt from '../../MyArt1.jpg';
import MyArt2 from '../../MyArt2.jpg';
import MyArt3 from '../../MyArt3.jpeg';
import Card1 from '../../Cards_pic1.jpg';
import Card2 from '../../Cards_pic2.jpg';
import Card3 from '../../Cards_pic3.jpg';

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
        return(
            <div>

                <div className="Title-Ability" >
                <span style={{textAlign: 'center', fontSize: '3rem'}}>Abilities</span>
                <p className="Discription-Ability" >Abilities that I have and make my life better. Maybe, others too.</p>
                <div style={{alignContent: 'center'}} className="Border-Ability" />
                </div>



                <div className="Cards-Container col-xl-9 mx-auto">
                <CardDeck>
                    <Card>
                        <Card.Img className=" CardImage " variant="top" src={Card1} />
                        <Card.Body>
                            <Card.Title>Coding</Card.Title>
                            <Card.Text>
                            Coding is one of the most enjoyable skills that I have. I always forget about the time when I am working on something coding.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img className=" CardImage " variant="top" src={Card2} />
                        <Card.Body>
                            <Card.Title>Composing</Card.Title>
                            <Card.Text>
                            Coding and Composing are similar. There is no end. But, It is worth it to spend so much time on this. Because this is what I love.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                    <Card.Img className=" CardImage " variant="top" src={Card3} />
                        <Card.Body>
                            <Card.Title>Photography</Card.Title>
                            <Card.Text>
                            Taking photos means that I make memory visible. That makes travel more exciting. Even daily life.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                </div>
                
                <div className="Title-Ability" >
                    <span style={{textAlign: 'center', fontSize: '3rem'}}>Works</span>
                    <p className="Discription-Ability" >Works that I love and proud of.</p>
                    <div style={{alignContent: 'center'}} className="Border-Ability" />
                </div>

                <Carousel className="Carousel" interval={100000}>
                    <Carousel.Item>
                        <img
                        className="Slids d-block w-100"
                        src={MyArt}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h2 style={{fontStyle: 'Italic'}}>Seascape</h2>
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
                        <h2 style={{fontStyle: 'Italic'}}>Memory in Summer</h2>
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
                                <h2 style={{fontStyle: 'Italic'}}>Venus</h2>
                                <p>Vancouver, Canada</p>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                            <Youtube
                            className="Slids d-block w-100"
                            videoId="hP_wJNjPpn0"
                            opts={opts}
                            onReady={this._onReady}
                            />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
} 

export default Works;