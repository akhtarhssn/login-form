import styled from "styled-components";
export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: transparent;
  border: 2px solid hsla(0, 0%, 100%, 0.7);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  margin: 1rem 0;
  outline: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: medium;
  &:focus {
    display: inline-block;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #fff;
    font-weight: 100;
    font-size: 1rem;
  }
`;
