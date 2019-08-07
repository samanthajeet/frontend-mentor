import React from "react";
import styled from "styled-components";

const Nav = styled.nav`

  .home {
    /* border: 1px solid red; */
    position: relative;
    top: 40vh;
    left: 25%;
    display: flex;
    flex-direction: column;
    width: 25%;
    align-items: flex-start
  }
  .not-home{
    /* border: 1px solid green; */
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;

    button{
      font-size: 1.5rem;
    }
  }

  button{
    background: none;
    border: none;
    margin: 0 1rem;
    font-size: 2rem;
    font-family: 'Nunito', sans-serif;
    text-transform: lowercase;
    color: #c7c7c7;
    transition: color .75s ease-in-out;
  }

  button:hover{
    cursor: pointer;
    color: #801336;
  }

  button:active{
    color: #EE4540;
    transition: none;
  }
`;

function Navigation(props) {
  console.log(props.history.location.pathname)
  const location = function(){
    if(props.history.location.pathname !== '/'){
      return "not-home"
    } else {
      return 'home'
    }
  }

  const goToPage = page => {
    props.history.push(page);
  };
  return (
    <Nav>
      <section className={location()} >
        <button onClick={() => goToPage("/")}>Home</button>
        <button onClick={() => goToPage("/signupform")}>Signup Form</button>
      </section>
    </Nav>
  );
}

export default Navigation;
