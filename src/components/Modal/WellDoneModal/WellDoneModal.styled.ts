import styled from "styled-components";
import openBookMob1x from "../../../images/mobile/open-orange-book-floating-mob-@1x.webp";
import openBookMob2x from "../../../images/mobile/open-orange-book-floating-mob-@2x.webp";
import openBookTab1x from "../../../images/tablet/open-orange-book-floating-tab-@1x.webp";
import openBookTab2x from "../../../images/tablet/open-orange-book-floating-tab-@2x.webp";
import openBookDes1x from "../../../images/desktop/open-orange-book-floating-des-@1x.webp";
import openBookDes2x from "../../../images/desktop/open-orange-book-floating-des-@2x.webp";

export const StyledWellDoneModalWrapper = styled.div`
  width: 343px;
  height: 459px;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--greyGreen);
  padding: 48px 16px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 528px;
    height: 520px;
    padding: 48px 64px;
    border-radius: 30px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledWellDoneModalTitle = styled.h3`
  color: var(--white);
  text-align: center;
  font-family: var(--font-family);
  font-size: 24px;
  font-style: normal;
  font-weight: var(--semiBold);
  line-height: 1.17;
  letter-spacing: -0.48px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.8px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

interface IContainer {
  $answers: boolean;
}

export const StyledWellDoneModalContainer = styled.div<IContainer>`
  display: flex;
  gap: ${({ $answers }) => ($answers ? "8px" : "32px")};
  justify-content: start;
  align-items: ${({ $answers }) => ($answers ? "start" : "start")};
  flex-direction: ${({ $answers }) => ($answers ? "column" : null)};
  width: ${({ $answers }) => ($answers ? "calc((100% - 32px) / 2)" : "100%")};

  @media screen and (min-width: 768px) {
    gap: ${({ $answers }) => ($answers ? "8px" : "64px")};
    width: ${({ $answers }) => ($answers ? "calc((100% - 64px) / 2)" : "100%")};
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledWellDoneModal_P = styled.p`
  color: rgba(252, 252, 252, 0.5);
  font-family: var(--font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: var(--regular);
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledWellDoneModal_ul = styled.ul`
  display: flex;
  gap: 4px;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledWellDoneModal_li = styled.li`
  color: var(--white);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: normal;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledWellDoneModalBook_div = styled.div`
  position: absolute;
  width: 152px;
  height: 121px;
  background-image: image-set(
    url(${openBookMob1x}) 1x,
    url(${openBookMob2x}) 2x
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  bottom: 44px;
  right: 12px;

  @media screen and (min-width: 768px) {
    width: 212px;
    height: 179px;
    background-image: image-set(
      url(${openBookTab1x}) 1x,
      url(${openBookTab2x}) 2x
    );
    right: 8px;
    bottom: 21px;
  }

  @media screen and (min-width: 1440px) {
    background-image: image-set(
      url(${openBookDes1x}) 1x,
      url(${openBookDes2x}) 2x
    );
  }
`;
