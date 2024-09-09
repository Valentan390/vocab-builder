import styled from "styled-components";

export const StyledDeleteWordModalWrapper = styled.div`
  width: 343px;
  padding: 48px 16px;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--greyGreen);
  position: relative;
`;

export const StyledDeleteWordModalText = styled.h3`
  color: var(--white);
  font-size: 24px;
  font-weight: var(--semiBold);
  line-height: 1, 17;
  letter-spacing: -0.48px;
`;
export const StyledDeleteWordModalContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;
export const StyledDeleteWordButtonClose = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  width: calc((100% - 8px) / 2);
  border-radius: 30px;
  background: var(--white);
  color: var(--black);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--bold);
  line-height: 1.5;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--greyGreen);
  }
`;

export const StyledDeleteWordButtonDelete = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  width: calc((100% - 8px) / 2);
  border-radius: 30px;
  border: 1px solid rgba(252, 252, 252, 0.4);
  color: var(--white);
  background: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: var(--bold);
  line-height: 1.5;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--red);
    color: var(--black);
  }
`;

// export const StyledDeleteWordModal = styled.``
// export const StyledDeleteWordModal = styled.``
// export const StyledDeleteWordModal = styled.``
// export const StyledDeleteWordModal = styled.``
// export const StyledDeleteWordModal = styled.``
