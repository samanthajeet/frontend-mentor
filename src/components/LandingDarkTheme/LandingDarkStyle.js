import styled from "styled-components";
import bgCurvy from "../../images/landingpage-darktheme/bg-curvy-desktop.svg";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

  img {
    object-fit: contain;
    height: 100%;
  }

  button {
    background: none;
    border: none;
    font-family: "Open Sans", sans-serif;
    font-size: 1.25rem;
  }

  h1,
  h2,
  h5,
  h6 {
    font-family: "Raleway", sans-serif;
  }

  h2 {
    font-size: 3rem;
  }

  h5 {
    font-weight: 700;
  }

  h6 {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
  }


  /* @media (min-width: 1200px) {
    background-color: lightblue;
  
} */
`;

export const Header = styled.header`
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: hsl(217, 28%, 15%);
  width: 100%;

  nav {
    /* border: 1px solid pink; */
    width: 25%;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    padding: 1rem 10rem;
  
}
`;

export const Intro = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bgCurvy});
  background: hsl(217, 28%, 15%);

  button {
    background: hsl(198, 60%, 50%);
    border-radius: 25px;
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

  .intro-text {
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    width: 40%;
    height: 20rem;
  }

  .intro-text > h6 {
    width: 75%;
  }

  #get-started {
    width: 50%;
    height: 4rem;
  }

  @media (min-width: 1200px) {
    .intro-illustration{
      width: 30%;
      max-width: 50rem;
    };

    button {
      max-width: 20rem;
      height: 3rem;
    }
  
}
`;

export const Services = styled.section`
  /* border: 1px solid white; */
  width: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;

  .service {
    /* border: 1px solid red; */
    margin: 2rem;
    width: 25rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1200px) {
    width: 70%;
    max-width: 70rem;
  
}
`;

export const StayProductive = styled.section`
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;
  padding: 3rem;

  .stayproductive-illustration {
    /* border: 1px solid red; */
    height: 100%;
  }

  .stayproductive-illustration > img {
    object-fit: contain;
    height: 100%;
  }

  .stayproductive-text {
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65%;
    width: 35%;
    text-align: left;
  }

  .stayproductive-text > h2 {
    /* border: 1px solid lightcyan; */
    width: 75%;
  }

  .stayproductive-text > a {
    color: hsl(176, 68%, 64%);
  }
`;

export const Testimonials = styled.section`
  /* border: 1px solid white; */
  width: 100%;
  padding: 2rem;
  margin: 8rem 0;
  display: flex;
  justify-content: space-evenly;

  #quote{
    max-height: 3rem;
    position: absolute;
    z-index: 0;
    left: 7rem;;

  }

  .testimony {
    /* border: 1px solid cyan; */
    padding: 2.25rem;
    text-align: left;
    background: hsl(219, 30%, 18%);
    width: 25%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .testimony h5 {
    font-size: 1.1rem;
    letter-spacing: .1rem;
  }

  .testimony h6 {
    font-size: 1rem;
    letter-spacing: .05rem;
  }

  .testimony-profile {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
  }

  .testimony-profile-image {
    height: 3.5rem;
    width: 3.5rem;
    margin-right: 1rem;
  }

  .testimony-profile-image > img {
    border-radius: 50px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;


export const DarkFooter = styled.footer`
width: 100%;
padding: 1rem;
padding-top: 8rem;
  background: hsl(216, 53%, 9%)
`


