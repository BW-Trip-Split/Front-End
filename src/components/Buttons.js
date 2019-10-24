import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.2rem;
  margin-bottom: 20px;
  background: #183c56;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #e6e2ff;
    color: black;
  }

  &:focus{
    outline: 0;
    border: 1px solid #183c56;
  }
`;
