
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {Form,Button} from "react-bootstrap";
import './Contact.css';

const Contact=()=>{


  function refreshPage() {
    window.location.reload(false);
  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uwtg9ha', 'template_g2h76mb', form.current, {
        publicKey: 'x9jzxIKrmxpDhArm9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          refreshPage()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },

      );

  };

  

 
    return(
        <>
        <div className="con-page">
            <div>
            <h1>Get touch with me</h1><br/><br/>
    <Form ref={form}  onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="to_name" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="from_name"  required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3"  controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <textarea name="message"  type="submit" placeholder="Message"  className=" msg" id="plc" required/>
        {/* <Form.Control type="submit" placeholder="Message"  value="Send" className=" msg" id="plc" name="msg" required /> */}
      </Form.Group>
     
      <a><button className="btn1" type="submit" >
        Submit
      </button></a>
    </Form>
    </div>
    
        </div>
        <hr></hr>
        </>
    )
}

export default Contact;