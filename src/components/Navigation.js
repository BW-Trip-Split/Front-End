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
  // width: 50%;
  font-weight: 700;
  text-align: start;
  padding: 10px 30px;

  @media (max-width: 500px) {
    // display: none;
    width: 50%;
  }

  @media (max-width: 320px) {
    display: none;
  }

  h1 {
    margin: 0;
    padding: 0;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }

  a {
    color: white;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    // width: 100%;
  }

  @media (max-width: 320px) {
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

const LogoutLink = styled.div`
  :hover {
    cursor: pointer;
  }
`;

function Navigation() {
  const logOut = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
    this.props.history.push("/login");
  };

  let marketingPages = ["https://bw-trip-split.github.io/Marketing-Page/", "https://cmruss.github.io/Marketing-Page/"];

  return (
    <Header>
      <Title>
        <h1>
          <a href={marketingPages[0]}>Trip</a> <a href={marketingPages[1]}>Split</a>
        </h1>
      </Title>
      <Nav>
        <div>
          <Link to="/">Dashboard</Link>
        </div>
        {/* <div>
          <Link to="/people">People</Link>
        </div>
        <div>
          <Link to="/transactions">Transactions</Link>
        </div> */}
        <LogoutLink onClick={e => logOut(e)}>Logout</LogoutLink>
      </Nav>
    </Header>
  );
}

export default Navigation;
