import styled from "styled-components";

export const PTContainer = styled.main`
  width: 100vw;
  padding: 5rem 0rem 0rem 5rem;
`;

export const PTHeader = styled.header`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
`;

export const PTLogo = styled.img``;

export const PTNav = styled.nav`
  /* border: 1px solid green; */
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  .login {
    color: hsl(231, 7%, 65%);
  }
`;

export const PTLink = styled.a`
  color: hsl(230, 29%, 20%);
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

export const PTMain = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const PTLeftContainer = styled.section`
  border: 1px solid blue;
  width: 50%;
  height: 100%;
  display: flex;
  padding-right: 2rem;
  text-align: left;
`;

export const PTTitle = styled.h1`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 7rem;
`;

export const PTRightContainer = styled.section`
  border: 1px solid blue;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;


