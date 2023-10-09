import styled from 'styled-components';

export const RecItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: #f0f1f4;
`;

export const RecTitle = styled.div`
  display: flex;
`;

export const RecImg = styled.div`
  display: flex;

  & > img {
    margin-left: 1px;
    margin-top: 1px;
  }

  & > img:first-child {
    margin-left: 0px;
  }
`;
