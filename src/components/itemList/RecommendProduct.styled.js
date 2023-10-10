import styled from 'styled-components';

export const RecItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: #f0f1f4;
`;

export const RecTitle = styled.div`
  display: flex;

  & > img {
    padding: 10px;
  }
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

export const RecText = styled.div`
  width: 140px;

  & > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  & span {
    font-weight: bold;
    margin-right: 3px;
  }
`;
