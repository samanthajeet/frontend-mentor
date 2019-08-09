import React, { Component } from "react";
import {
  Header,
  DarkLanding,
  Intro,
  Services,
  StayProductive,
  Testimonials
} from "./LandingDarkStyle";
import illustrationlogo from "../../images/landingpage-darktheme/illustration-intro.png";
import accessAnywhere from "../../images/landingpage-darktheme/icon-access-anywhere.svg";
import security from "../../images/landingpage-darktheme/icon-security.svg";
import collaboration from "../../images/landingpage-darktheme/icon-collaboration.svg";
import anyFile from "../../images/landingpage-darktheme/icon-any-file.svg";
import stayProductive from "../../images/landingpage-darktheme/illustration-stay-productive.png";
import bigQuotes from "../../images/landingpage-darktheme/bg-quotes.png";

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
        <StayProductive>
          <figure className="stayproductive-illustration">
            <img src={stayProductive} alt="" />
          </figure>
          <section className="stayproductive-text">
            <h2>Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="google.com">See how Aloha works</a>
          </section>
        </StayProductive>
        <Testimonials>
          <img src={bigQuotes} alt="" id="quote"/>
          <section className="testimony">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <section className="testimony-profile">
              <figure className="testimony-profile-image">
                <img
                  src="https://cdn3-www.comingsoon.net/assets/uploads/2018/10/TinaFeyFeature-618x360.jpg"
                  alt=""
                />
              </figure>
              <section className="testimony-profile-text">
                <h5>Tina Fey</h5>
                <h6>Bosslady</h6>
              </section>
            </section>
          </section>
          <section className="testimony">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <section className="testimony-profile">
              <figure className="testimony-profile-image">
                <img
                  src="https://img.cinemablend.com/cb/c/6/6/2/6/7/c6626743608899b510147bd45ee5ad8084f48cd675e7769076a3ef1be34cb72f.jpg"
                  alt=""
                />
              </figure>
              <section className="testimony-profile-text">
                <h5>Captain Raymond Holt</h5>
                <h6>NYPD Captain</h6>
              </section>
            </section>
          </section>
          <section className="testimony">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <section className="testimony-profile">
              <figure className="testimony-profile-image">
                <img
                  src="https://www.thewrap.com/wp-content/uploads/2015/02/leslie-knope-parks-and-recreation-nbc.jpg"
                  alt=""
                />
              </figure>
              <section className="testimony-profile-text">
                <h5>Leslie Knope</h5>
                <h6>Regional Director of National Park Service </h6>
              </section>
            </section>
          </section>
        </Testimonials>
      </DarkLanding>
    );
  }
}

export default LandingDark;
