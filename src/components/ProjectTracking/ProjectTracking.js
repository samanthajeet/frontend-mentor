import React, { Component } from "react";
import illustrationdevices from "../../images/project-tracking/illustration-devices.svg";
import logo from "../../images/project-tracking/logo.svg";

import {
  PTContainer,
  PTHeader,
  PTLogo,
  PTNav,
  PTLink,
  PTTitle,
  PTLeftContainer,
  PTRightContainer,
  PTMain
} from "./ProjectTrackingStyle";

class ProjectTracking extends Component {
  state = {};
  render() {
    return (
      <PTContainer>
        <PTHeader>
          <PTLogo src={logo} alt="logo" />
          <PTNav>
            <PTLink>Product</PTLink>
            <PTLink>Features</PTLink>
            <PTLink>Pricing</PTLink>
            <PTLink className="login">Login</PTLink>
          </PTNav>
        </PTHeader>
        <PTMain>
          <PTLeftContainer>
            <PTTitle>Powerful Insights Into your team</PTTitle>
          </PTLeftContainer>
          <PTRightContainer>
            <img src={illustrationdevices} alt="" />
          </PTRightContainer>
        </PTMain>
      </PTContainer>
    );
  }
}

export default ProjectTracking;
