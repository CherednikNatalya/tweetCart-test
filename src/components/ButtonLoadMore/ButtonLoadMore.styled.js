import styled from 'styled-components';

export const Button = styled.button`
  font-weight: bold;
  display: flex;
  text-align: center;
  max-width: 180px;
  margin: 0 auto;
  padding: 8px 16px;
 margin-top: 30px;
  font-size: 18px;
  line-height: calc(24 / 18);
  text-decoration: none;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  color: #373737;
  background: #EBD8FF;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: rgb(227, 227, 227);
    background-color: #5736a3;
  }
`;