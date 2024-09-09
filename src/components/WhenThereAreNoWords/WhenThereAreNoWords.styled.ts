import styled from "styled-components";
import bloodReport2x from "../../images/mobile/blood-report-mob-@2x.webp";
import bloodReport1x from "../../images/mobile/blood-report-mob-@1x.webp";
import bloodReportTab1x from "../../images/tablet/blood-report-tab-@1x.webp";
import bloodReportTab2x from "../../images/tablet/blood-report-tab-@2x.webp";
import bloodReportDes1x from "../../images/desktop/blood-report-des-@1x.webp";
import bloodReportDes2x from "../../images/desktop/blood-report-des-@2x.webp";
import { Link } from "react-router-dom";

export const StyledNoWordsWrapper = styled.div`
  display: flex;
  gap: 33px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 62px 62px 0;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    padding: 62px 210px 180px;
  }
`;

export const StyledNoWordsContainer = styled.div`
  width: 144px;
  height: 166px;
  margin-left: auto;
  margin-right: auto;
  flex-shrink: 0;

  background-image: image-set(
    url(${bloodReport1x}) 1x,
    url(${bloodReport2x}) 2x
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 205px;
    height: 230px;
    background-image: image-set(
      url(${bloodReportTab1x}) 1x,
      url(${bloodReportTab2x}) 2x
    );
  }

  @media screen and (min-width: 1440px) {
    background-image: image-set(
      url(${bloodReportDes1x}) 1x,
      url(${bloodReportDes2x}) 2x
    );
  }
`;

export const StyledNoWords_h3 = styled.h3`
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledNoWords_p = styled.p`
  font-size: 14px;
  font-weight: var(--regular);
  line-height: normal;
  margin-bottom: 88px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 1.5;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledNoWordsContainerButton = styled.div`
  display: flex;
  gap: 18px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 10px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`;

interface ButtonProps {
  $cancel?: boolean;
}

export const StyledNoWords_button = styled(Link)<ButtonProps>`
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${({ $cancel }) => ($cancel ? "inherit" : "var(--greyGreen)")};
  color: ${({ $cancel }) => ($cancel ? "var(--greyGreen)" : "var(--white)")};
  font-size: 16px;
  font-style: normal;
  font-weight: var(--bold);
  line-height: 1.5;
  transition: var(--transition);

  &:hover {
    background: ${({ $cancel }) =>
      $cancel ? "var(--greenGray)" : "var(--greenGray)"};
    color: ${({ $cancel }) => ($cancel ? "var(--white)" : "var(--black)")};
  }

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 14px ${({ $cancel }) => ($cancel ? "71px" : "64px")};
    border: ${({ $cancel }) =>
      $cancel ? "1px solid var(--greyGreen)" : "none"};
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
