import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form
        id="contact-form"
      >
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            placeholder="Type your message here"
          ></textarea>
        </div>
        <div className="submit-btn-container">
          <button
            type="submit"
            id="submit-btn"
            className="btn btn-outline-light"
          >
            Submit
          </button>
        </div>
      </form>
      <div class="status-container text-center">
        <p class="status"></p>
      </div>
    </div>
  );
};

export default ContactForm;
