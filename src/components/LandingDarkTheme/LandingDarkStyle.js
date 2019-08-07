import styled from "styled-components";

export const DarkLanding = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }
  background: hsl(218, 28%, 13%);
  min-height: 100vh;
  font-size: 14px;
  button {
    background: none;
    border: none;
    font-family: "Open Sans", sans-serif;
    font-size: 1.25rem;
  }

  h1, h2 {
    font-family: "Raleway", sans-serif;
  }

  h2{
    font-size: 2.75rem;
  }

  h6{
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
  }
`;

export const Header = styled.header`
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: hsl(217, 28%, 15%);

  nav {
    /* border: 1px solid pink; */
    width: 25%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Intro = styled.section`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsl(217, 28%, 15%);

  button {
    background: hsl(198, 60%, 50%);
    border-radius: 10px;
    min-width: 10rem;
    min-height: 2rem;
  }

  .intro-illustration {
    /* border: 1px solid red; */
    width: 40%;
    margin-top: 2rem;
  }
  .intro-illustration > img {
    object-fit: contain;
    width: 100%;
  }

  .intro-text{
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    width: 40%;
  }

  .intro-text > h6{
    margin-top: 2rem;
    width: 75%;
  }

  #get-started{
    width: 50%;
    height: 4rem;
  }
`;
