import React, { useState } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { register, login, getHome, getUsers, getUser, updateUser, deleteUser } from '../actions/actions';
//STYLE
const H2 = styled.h2`text-align: center;`;
const H3 = styled.h3`text-align: center;`;
const InputDiv = styled.div`display: flex; flex-direction: column; justify-content: center;`;
const SignUpDiv = styled.div`text-align: center;`;
const Button = styled.button`margin-top: 20px; border-radius: 10px; width: 150px; height: 50px; background-color: #bac9d1`;
const Label = styled.label`margin: 10px;`;
const Input = styled.input`margin-left: 10px; border-radius: 3px; height: 20px;`;


function SignUpForm(props) {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
  })

  function onChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    registerHandler();
    setCredentials({name: "", email: "", password: ""});
  }


  const registerHandler = () => {
    let creds = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      role: "user"
    }
    props.register(creds)
  }

  return (
    <SignUpDiv className="signup-container">
      <H2>Don't have an account?</H2>
      <H3>Sign Up!</H3>
      <form onSubmit={onSubmit}>
        <InputDiv>
          <Label>Enter Your Name
            <Input placeholder="John Doe" value={credentials.name} name="name" onChange={onChange} type="text" />
          </Label>
          <Label>Enter Your Email
            <Input placeholder="johndoe@email.com" value={credentials.email} name="email" onChange={onChange} type="email" />
          </Label>
          <Label>Choose Pasword
            <Input placeholder="**********" value={credentials.password} name="password" onChange={onChange} type="password" />
          </Label>
        </InputDiv>
          <Button type="submit">Create Account</Button>
      </form>
    </SignUpDiv>
  )
}

function mapStateToProps(state){
  // console.log(state)
  return {}
}

export default connect(mapStateToProps, {register, login, getHome, getUsers, getUser, updateUser, deleteUser})(SignUpForm);
