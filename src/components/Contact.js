import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_dh7laxg", e.target, "2PeusyhOpA_WOQ90v")
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent!");
        },
        (error) => {
          alert("something went wrong!");
          console.log(error.text);
        }
      );
  }

  return (
    <div onSubmit={sendEmail}>
      <form>
        <input name="from_name" className="form-input" placeholder="Name" />
        <input name="email" className="form-input" placeholder="Email:" />
        <input name="subject" className="form-input" placeholder="Subject" />
        <br />
        <input name="message" placeholder="Message:" className="form-msg" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;
