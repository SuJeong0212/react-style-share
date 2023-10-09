import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Search = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  border: 1px solid #eee;
  margin: 10px 5px;
  background-color: #f9f9f9;
  border-radius: 100px;
  padding: 5px 15px;

  & > input {
    width: 200px;
    text-align: center;
    background-color: transparent;
    font-size: 12px;
  }

  & > input:focus {
    outline: none;
    text-align: left;
  }
`;
