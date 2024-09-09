import { FC } from "react";
import {
  StyledNoWordsContainer,
  StyledNoWordsContainerButton,
  StyledNoWordsWrapper,
  StyledNoWords_button,
  StyledNoWords_h3,
  StyledNoWords_p,
} from "./WhenThereAreNoWords.styled";
import useModalHandler from "../../hooks/useModalHandler";

const WhenThereAreNoWords: FC = () => {
  const { handleOpenModal } = useModalHandler();
  return (
    <StyledNoWordsWrapper>
      <StyledNoWordsContainer></StyledNoWordsContainer>
      <div>
        <StyledNoWords_h3>
          You don't have a single word to learn right now.
        </StyledNoWords_h3>
        <StyledNoWords_p>
          Please create or add a word to start the workout. We want to improve
          your vocabulary and develop your knowledge, so please share the words
          you are interested in adding to your study.
        </StyledNoWords_p>
        <StyledNoWordsContainerButton>
          <StyledNoWords_button
            to={"/dictionary"}
            type="button"
            onClick={() => handleOpenModal("AddWordModal")}
          >
            Add word
          </StyledNoWords_button>
          <StyledNoWords_button to={"/dictionary"} $cancel={true} type="button">
            Cancel
          </StyledNoWords_button>
        </StyledNoWordsContainerButton>
      </div>
    </StyledNoWordsWrapper>
  );
};

export default WhenThereAreNoWords;
