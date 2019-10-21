import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//https://tripsplitr.herokuapp.com/

function Navigation() {
  const Nav = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    div {
      margin: 1rem;
    }

    a {
      color: #d65a31;
      text-decoration: none;
    }
  `;

  return (
    <>
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
    </>
  );
}

export default Navigation;
