import React, { Component } from "react";
import "./SignupForm.css";

class SignUpForm extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="left">
          <h1>
            Learn to code by watching others
          </h1>
          <h5>See how experienced developers solve
          problems in real-time. Watching scripted tutorials is great, but
          understanding how developers think is invaluable.</h5>
        </section>
        <section className="right">
          Try it free 7 days then $20/mo. thereafter First Name Last Name Email
          Address Password Claim your free trial By clicking the button, you are
          agreeing to our Terms and Services
          <footer>
            <p class="attribution">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by <a href="#">Samantha Jeet</a>.
            </p>
          </footer>
        </section>
      </main>
    );
  }
}

export default SignUpForm;
