import './Contact.css'
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Header from './../Components/Header';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fd44ram', 'template_aqx6klu', form.current, 'hBo-GHHnxYJW8ef5T')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
    <div className='Contact-container'>
      <Header/>
      <br/>
      <br/>
      <form ref={form} onSubmit={sendEmail}>
      <br/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <br/>
      <label>Subject</label>
      <input type="text" name="Subject" />
      <br/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
      
  );
}

export default Contact;