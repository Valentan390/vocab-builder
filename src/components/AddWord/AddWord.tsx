import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  StyledAddWordAddWord,
  StyledAddWordTrain,
  StyledAddWordWrapper,
} from "./AddWord.styled";
import useModalHandler from "../../hooks/useModalHandler";
import { useLocation } from "react-router-dom";

const AddWord: FC = () => {
  const {pathname} = useLocation();
  const { handleOpenModal } = useModalHandler();
  
  return (
    <StyledAddWordWrapper>
      {pathname === "/dictionary" && (  <StyledAddWordAddWord
        type="button"
        onClick={() => handleOpenModal("AddWordModal")}
      >
        Add word
        <Icon
          iconName="icon-plus"
          width="20"
          height="20"
          stroke="var(--greyGreen)"
        />
      </StyledAddWordAddWord>)}
    

      <StyledAddWordTrain to="/training">
        Train oneself
        <Icon
          iconName="icon-switch-horizontal"
          width="20"
          height="20"
          stroke="var(--greyGreen)"
        />
      </StyledAddWordTrain>
    </StyledAddWordWrapper>
  );
};

export default AddWord;
