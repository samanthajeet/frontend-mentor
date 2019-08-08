import React, { Component } from "react";
import { Header, DarkLanding, Intro, Services } from "./LandingDarkStyle";
import illustrationlogo from "../../images/landingpage-darktheme/illustration-intro.png";
import accessAnywhere from "../../images/landingpage-darktheme/icon-access-anywhere.svg";
import security from "../../images/landingpage-darktheme/icon-security.svg";
import collaboration from "../../images/landingpage-darktheme/icon-collaboration.svg";
import anyFile from "../../images/landingpage-darktheme/icon-any-file.svg";

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
        <Services>
          <div className="service">
            <figure>
              <img src={accessAnywhere} alt="" />
            </figure>
            <h5>Access your files, anywhere</h5>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="service">
            <figure>
              <img src={security} alt="" />
            </figure>
            <h5> Security you can trust</h5>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className="service">
            <figure>
              <img src={collaboration} alt="" />
            </figure>
            <h5>Real-time collaboration</h5>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="service">
            <figure>
              <img src={anyFile} alt="" />
            </figure>
            <h5>Store any type of file</h5>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </Services>
      </DarkLanding>
    );
  }
}

export default LandingDark;
