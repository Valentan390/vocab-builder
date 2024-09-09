import styled from "styled-components";

export const StyledWordsTableWrapper = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    padding: 18px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 15px;
    background: #fff;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledWordsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  // margin: 32px auto;
  overflow: hidden;
  background: #fcfcfc;
`;

export const StyledWordsTableThead = styled.thead``;

export const StyledWordsTableTr = styled.tr``;

export const StyledWordsTableTh = styled.th`
  padding: 16px 10px;
  border-bottom: 1px solid #dbdbdb;
  background: rgba(133, 170, 159, 0.1);
  color: #121417;
  font-family: "MacPaw Fixel Display";
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  // text-align: center;

  &:first-child {
    border-radius: 8px 0px 0px 0px;
    border-right: 1px solid #dbdbdb;
  }

  &:last-child {
    border-radius: 0px 8px 0px 0px;
  }

  &:not(:first-child):not(:last-child) {
    border-right: 1px solid #dbdbdb;
  }

  @media screen and (min-width: 768px) {
    padding: 22px;
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledWordsTableTd = styled.td`
  padding: 16px 14px;
  border-bottom: 1px solid #dbdbdb;
  //   background: #fcfcfc;
  border-right: 1px solid #dbdbdb;
  color: #121417;
  font-family: "MacPaw Fixel Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  // text-align: center;

  &:last-child {
    border-right: none;
  }

  &:last-child,
  &:first-child,
  &:not(:first-child):not(:last-child) {
    tr:last-child & {
      border-bottom: none;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 22px 20px;
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
