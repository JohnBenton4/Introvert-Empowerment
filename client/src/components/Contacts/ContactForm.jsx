import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_10uvvgu",
        "template_yritjis",
        form.current,
        "62wRyZSUDjcHv0idW"
      )
      .then(
        (result) => {
        },
        (error) => {
        }
      );
    e.target.reset();
  };
  return (
    <>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div id="contact">
          <h1>Contact us</h1>
          <p>
            {" "}
            Leave us a message below if you have any questions or would like to
            know how we can help you further.
          </p>
        </div>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="sendBtn" type="submit" value="Send" />
      </form>
    </>
  );
}
