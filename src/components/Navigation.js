import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//https://tripsplitr.herokuapp.com/

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: #183c56;
  color: white;
`;

const Title = styled.div`
  width: 50%;
  font-weight: 700;
  text-align: start;
  padding: 10px 30px;

  @media (max-width: 500px) {
    width: 0;
    padding: 0;
    margin: 0;
    display: none;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  @media();
`;
const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
  }

  div {
    margin: 1rem;
    font-size: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

function Navigation() {
  const logOut = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Header>
      <Title>
        <h1>Trip Split</h1>
      </Title>
      <Nav>
        <div>
          <Link to="/">Trips</Link>
        </div>
        <div>
          <Link to="/people">People</Link>
        </div>
        <div>
          <Link to="/transactions">Transactions</Link>
        </div>
        <div onClick={e => logOut(e)}>Logout</div>
      </Nav>
    </Header>
  );
}

export default Navigation;
