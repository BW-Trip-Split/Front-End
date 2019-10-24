import React, { useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { register, login, getHome, getUsers, getUser, updateUser, deleteUser } from "../actions/actions";
//STYLE
const H2 = styled.h2`
  text-align: center;
`;
const H3 = styled.h3`
  text-align: center;
`;
const InputDiv = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`;
const SignUpDiv = styled.div`
  text-align: center;
`;
const Button = styled.button`
margin-top: 20px;
box-shadow: 0 1px 6px -2px #000;
border: 0;
width: 150px;
padding: 10px;
background-color: #183c56;
color: white;
`;
const Label = styled.label`
  margin: 10px;
`;
const Input = styled.input`
padding: 5px;
margin: 1px;
width: 200px;
`;

function SignUpForm(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
  });

  function onChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    registerHandler();
    setCredentials({ name: "", email: "", password: "" });
  }

  const registerHandler = () => {
    let creds = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      role: "user"
    };
    props.register(creds);
  };

  return (
    <SignUpDiv className="signup-container">
      <H2>Don't have an account?</H2>
      <H3>Sign Up!</H3>
      <form onSubmit={onSubmit}>
        <InputDiv>
          <Input placeholder="Enter Your Name" value={credentials.name} name="name" onChange={onChange} type="text" />

          <Input placeholder="Email Address" value={credentials.email} name="email" onChange={onChange} type="email" />

          <Input
            placeholder="Choose Password"
            value={credentials.password}
            name="password"
            onChange={onChange}
            type="password"
          />
        </InputDiv>
        <Button type="submit">Create Account</Button>
      </form>
    </SignUpDiv>
  );
}

function mapStateToProps(state) {
  // console.log(state)
  return {};
}

export default connect(
  mapStateToProps,
  { register, login, getHome, getUsers, getUser, updateUser, deleteUser }
)(SignUpForm);
