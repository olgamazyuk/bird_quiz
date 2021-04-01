import styled from 'styled-components';

export const Button = styled.button`
  width: 100%; 
  margin-top: 3rem;
  padding: .9rem .75rem;
  color: #fff;
  border-color: #007bff; 
  border: 1px solid transparent;
  border-radius: .25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: color .15s ease-in-out,
  background-color .15s ease-in-out,
  border-color .15s ease-in-out,
  box-shadow .15s ease-in-out;
  :focus {
  color: black;
  }
`;