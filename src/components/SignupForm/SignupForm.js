import React, { Component } from "react";
import "./SignupForm.css";

class SignUpForm extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="left">
          <h1>Learn to code by watching others</h1>
          <h5>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </h5>
        </section>
        <section className="right">
          <section className="right-header rounded-corners">
            <h5>
              <span className="bold">Try it free 7 days</span> then $20/mo.
              thereafter{" "}
            </h5>
          </section>
          <section className="inputs rounded-corners">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Claim your free trial</button>
            <section className="footer">
              By clicking the button, you are agreeing to our <span className="redtext">Terms and Services</span> 
            </section>
          </section>
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
