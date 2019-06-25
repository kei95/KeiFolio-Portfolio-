import React, { Component } from "react";
import reactDOM from 'react-dom';
import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactForm.css';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface Props{
  getOffsetsFromSctions: any;
}

class ContactForm extends Component<Props> {

  componentDidMount() {
    var rect = reactDOM.findDOMNode(this)
this.props.getOffsetsFromSctions(rect.offsetTop)
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
                        <Form.Control type="textarea" placeholder="Name" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword" style={{ marginBottom: '7%' }}>
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                      <Form.Group controlId="ControlTextarea">
                        <Form.Control as="textarea" rows="3" placeholder="Message" />
                      </Form.Group>
                      <Button style={{ marginBottom: "10%" }} variant="primary" type="submit">
                        Send Message
            </Button>
                    </Form>
                  </Col>

                  <Col className="contant-right" md={6}>
                    <div className="Content-right">
                      <h1 className="Title-Left"> Get in Touch </h1>
                      <div className="Border" />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at.
                      Totam magni ipsum suscipit amet?
          Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                      <div className="address" style={{ display: 'flex', alignItems: 'center', marginTop: '2%' }}>
                        <FontAwesomeIcon className="icons" icon={faMapMarkerAlt} style={{ color: 'blue', fontSize: '15', marginRight: '15' }} />
                        <span>2409 BIDWELL ST VANCOUVER BC V6G 2K8</span>
                      </div>
                      <div className="address" style={{ display: 'flex', alignItems: 'center', marginTop: '2%' }}>
                        <FontAwesomeIcon className="icons" icon={faPhone} style={{ color: 'blue', fontSize: '15', marginRight: '15' }} />
                        <span>(604) 356-1881</span>
                      </div>
                      <div className="address" style={{ display: 'flex', alignItems: 'center', marginTop: '2%' }}>
                        <FontAwesomeIcon className="icons" icon={faEnvelope} style={{ color: 'blue', fontSize: '15', marginRight: '15' }} />
                        <span>kei0613shine.star@gmail.com</span>
                      </div>
                    </div>
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