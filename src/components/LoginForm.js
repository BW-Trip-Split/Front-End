import React, { useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { register, login } from "../actions/actions";
import SignUpForm from "./SignUpForm";

//STYLE
const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 80%;
  font-size: 1rem;
  
`;
const LoginDiv = styled.div`
  // text-align: center;
  // height: 100%;
  // width: 100vw;
  // border-radius: 10px;
  // border-top: 3px outset #68b5de;
`;
const InputDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const SignupDiv = styled.div`
  margin-top: 60px;
`;
const Input = styled.input`
  padding: 5px;
  margin: 1px;
  width: 200px;
  font-size: 1rem;
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

function LoginForm(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  function onChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    loginHandler();
    setCredentials({ email: "", password: "" });
  }

  const loginHandler = () => {
    let credss = {
      email: credentials.email,
      password: credentials.password
    };
    props.login(credss).then(res => {
      props.history.push("/");
    });
  };

  return (
    <WrapperDiv>
      <LoginDiv className="login-container">
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <InputDiv>
            <Input placeholder="Email" value={credentials.email} name="email" onChange={onChange} type="email" />
            <Input
              placeholder="Password"
              value={credentials.password}
              name="password"
              onChange={onChange}
              type="password"
            />
          </InputDiv>
          <Button type="submit">Sign In</Button>
        </form>
        <SignupDiv>
          <SignUpForm />
        </SignupDiv>
      </LoginDiv>
    </WrapperDiv>
  );
}

function mapStateToProps(state) {
  // console.log(state)
  return {};
}

export default connect(
  mapStateToProps,
  { register, login }
)(LoginForm);
