import './Contact.css'
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import pic from './../images/img0017.jpg';

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
    
        <h1 className='TitleContact'>Contact Us ! </h1>
      <div className='form_container'>
        
        <form ref={form} onSubmit={sendEmail}>
        <div className='flex-container1'>
          <div className='flex-container2'>
            <label className='email'>Email</label>
            <label className='subject'>Subject</label>
            <label className='message'>Message</label>
          </div>
          <div className='flex-container3'>
            <input type="email" className='input' name="user_email" />
            <input type="text"className='input' name="Subject" />
            <textarea name="message"className='input' />
            <input type="submit" value="Send" className='SendBtn' />
          </div>
        </div>
        
      </form>
      </div>
      <img 
        className='picture_frame'
        src={pic}
        />
    <Footer/>
    </div>
      
  );
}

export default Contact;