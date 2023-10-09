import styled from 'styled-components';

export const TabMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin: 20px 0 10px 0;

  & > li {
    width: 50%;
    text-align: center;
    cursor: pointer;
    padding: 10px 0;

    &.active {
      border-bottom: 2px solid #333;
      font-weight: bold;
    }
  }
`;
