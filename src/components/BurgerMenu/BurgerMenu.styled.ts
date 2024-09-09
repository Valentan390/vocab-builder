import styled from "styled-components";
import illustration_1x from "../../images/mobile/illustration@1x.webp";
import illustration_1x_tablet from "../../images/tablet/illustration@1x.webp";
import illustration_2x from "../../images/mobile/illustration@2x.webp";
import illustration_2x_tablet from "../../images/tablet/illustration@2x.webp";

export const StyledBurgerBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const StyledBurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: -300px;
  transition: right 0.8s ease;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 10%;
  justify-content: start;
  align-items: start;
  width: 50vw;
  height: 100vh;
  //   padding: 20px 32px;
  background-color: var(--greyGreen);
  background-image: image-set(
    url(${illustration_1x}) 1x,
    url(${illustration_2x}) 2x
  );
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;

  @media screen and (min-width: 768px) {
    background-image: image-set(
      url(${illustration_1x_tablet}) 1x,
      url(${illustration_2x_tablet}) 2x
    );
  }
`;

export const StyledBurgerMenuUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledBurgerMenuClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const StyledBurgerMenu = styled.``;
// export const StyledBurgerMenu = styled.``;
// export const StyledBurgerMenu = styled.``;
// export const StyledBurgerMenu = styled.``;
