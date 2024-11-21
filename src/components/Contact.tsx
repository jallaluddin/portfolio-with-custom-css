import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid'>
        <div className='contact-info'>
          <h2 className='contact-title' data-aos="zoom-in-up">Get in touch</h2>
          <p className='contact-description' data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className='contact-item' data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> jalaluddin7096@gmail.com
          </div>
          <div className='contact-item' data-aos="zoom-in-up">
            <BsTelephone size={30} /> {+92} 3337177397
          </div>
        </div>
        <div className='contact-form'>
          <div className='form-group' data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              className='form-input'
              id='name' 
            />
          </div>
          <div className='form-group' data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input 
              type="text"
              className='form-input'
              id='email' 
            />
          </div>
          <div className='form-group' data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea 
              className='form-textarea'
              id='message' 
              rows={8}>
            </textarea>
          </div>
          <button className='contact-button' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
