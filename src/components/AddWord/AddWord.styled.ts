import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAddWordWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;
`;

export const StyledAddWordAddWord = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--black);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledAddWordTrain = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--black);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.5;
`;

// export const StyledAddWord = styled.``
// export const StyledAddWord = styled.``
// export const StyledAddWord = styled.``
// export const StyledAddWord = styled.``
// export const StyledAddWord = styled.``
