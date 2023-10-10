import styled from 'styled-components';

export const ItemList = styled.ul`
  width: 100%;

  & svg {
    position: absolute;
    right: 9px;
    bottom: 10px;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  display: flex;
  margin: 5px 0;
`;

export const Badge = styled.span`
  background-color: #efefef;
  padding: 3px 4px;
  border-radius: 3px;
  display: inline-block;
  margin: 5px 0;
`;
