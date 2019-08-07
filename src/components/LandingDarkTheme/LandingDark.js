import React, { Component } from "react";
import { Header, DarkLanding, Intro } from "./LandingDarkStyle";
import illustrationlogo from "../../images/landingpage-darktheme/illustration-intro.png";

class LandingDark extends Component {
  state = {};

  componentDidMount() {
    console.log(illustrationlogo);
  }
  render() {
    return (
      <DarkLanding>
        <Header>
          <section className="logo">
            <h1>aloha</h1>
          </section>
          <nav>
            <button>Features</button>
            <button>Team</button>
            <button>Sign In</button>
          </nav>
        </Header>
        <Intro>
          <figure className="intro-illustration">
            <img src={illustrationlogo} alt="test" />
          </figure>
          <div className="intro-text">
            <h2>All your files in one secure location, accessible anywhere.</h2>
            <h6>
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </h6>
            <button id="get-started">Get Started</button>
          </div>
        </Intro>
      </DarkLanding>
    );
  }
}

export default LandingDark;
