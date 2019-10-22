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

  h1 {
    margin: 0;
    padding: 0;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  div {
    margin: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

function Navigation() {
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
      </Nav>
    </Header>
  );
}

export default Navigation;
