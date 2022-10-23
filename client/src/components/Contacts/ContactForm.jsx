import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_10uvvgu', 'template_yritjis', form.current, '62wRyZSUDjcHv0idW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

    };
    return (
    <>
         <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </>
    )
}