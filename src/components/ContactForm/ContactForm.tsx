import React, { Component } from "react";
import reactDOM from 'react-dom';
import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactForm.css';
import { faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import axios from 'axios';


interface Props{
  getOffsetsFromSctions: any;
}

type myType = {
  name: string,
  email: string,
  message: string
}

class ContactForm extends Component<Props, myType> {
  constructor(props: any){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  state: myType ={
    name: "",
    email: "",
    message: ""
  }

  componentDidMount() {
    var rect = reactDOM.findDOMNode(this)
    this.props.getOffsetsFromSctions(rect.offsetTop)
}

  handleChange = (e: any) => {
    this.setState({[e.target.name]: e.target.value} as any);
  }

  async onSubmit (e: any) {
    console.log(this.state)
    const { name, email, message} = this.state;
    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
    this.setState({name: "", email: "", message: ""});
  }

  render() {
    return (
      <div className="Cards-Container col-xl-9 mx-auto">
        <div className="ContactFormCard">
          <Row>
            <Col xs={12}>
              <div className="box-shadow">
                <Row>
                  <Col md={6} className="contant-left">
                    <Form>
                      <h1 className="Title-Left"> Contact Me </h1>
                      <div className="Border" />
                      <Form.Group controlId="formBasicEmail" style={{ marginBottom: '7%' }}>
                        <Form.Control name="name" type="name" onChange={(e) => this.handleChange(e as any)} placeholder="Name" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword" style={{ marginBottom: '7%' }}>
                        <Form.Control name="email" type="email" onChange={(e) => this.handleChange(e as any)} placeholder="Email" />
                      </Form.Group>
                      <Form.Group controlId="ControlTextarea">
                        <Form.Control name="message" as="textarea" type="message" onChange={(e) => this.handleChange(e as any)} rows="3" placeholder="Message" />
                      </Form.Group>
                      <Button style={{ marginBottom: "10%" }} onClick={(e) => this.onSubmit(e as any)} type="reset" variant="primary" >
                        Send Message
            </Button>
                    </Form>
                  </Col>

                  <Col className="contant-right" md={6}>
                    <Row>
                    <div className="Content-right">
                      <h1 className="Title-Left"> Get in Touch </h1>
                      <div className="Border" />
                      <p className="scription">Thank you for leading through my portfolio page until the end. 
                      I would love to connect with you if you were interested.
                      You can follow me on Github, LinkedIn or send Email or message me with the link on the left side!</p>
                      <Col xs={6}>
                        <a href="https://www.linkedin.com/in/kei-yamashita-075164178/">
                        <FontAwesomeIcon  className="icons" icon={faLinkedin} style={{ color: 'blue', fontSize: '30', marginRight: '30' }} />
                        </a>
                        <a href="https://github.com/kei95">
                        <FontAwesomeIcon className="icons" icon={faGithubAlt} style={{ color: 'blue', fontSize: '30', marginRight: '30' }} />
                        </a>
                        <FontAwesomeIcon className="icons" icon={faEnvelope} style={{ color: 'blue', fontSize: '30', marginRight: '30' }} />
                      </Col>
                    </div>
                    </Row>
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
export default ContactForm;