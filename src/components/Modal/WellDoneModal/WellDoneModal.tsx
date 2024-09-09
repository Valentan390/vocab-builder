import { FC, useMemo } from "react";
import {
  StyledWellDoneModalBook_div,
  StyledWellDoneModalContainer,
  StyledWellDoneModalTitle,
  StyledWellDoneModalWrapper,
  StyledWellDoneModal_P,
  StyledWellDoneModal_li,
  StyledWellDoneModal_ul,
} from "./WellDoneModal.styled";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import { useAppSelector } from "../../../hooks/useReduxHooks";
import { selectResultTasks } from "../../../redux/word/wordSelectors";

const WellDoneModal: FC = () => {
  const resultTasks = useAppSelector(selectResultTasks);
  const correctAnswers = useMemo(
    () => resultTasks?.filter((resultTask) => resultTask.isDone === true),
    [resultTasks]
  );
  const wrongAnswers = useMemo(
    () => resultTasks?.filter((resultTask) => resultTask.isDone === false),
    [resultTasks]
  );

  const renderAnswerList = (answers: typeof resultTasks, label: string) => (
    <StyledWellDoneModalContainer $answers={true}>
      <StyledWellDoneModal_P>{label}:</StyledWellDoneModal_P>
      <StyledWellDoneModal_ul>
        {answers?.map(({ en, ua, task }, index) => (
          <StyledWellDoneModal_li key={index}>
            {task === "en" ? en : ua}
          </StyledWellDoneModal_li>
        ))}
      </StyledWellDoneModal_ul>
    </StyledWellDoneModalContainer>
  );

  return (
    <StyledWellDoneModalWrapper>
      <ButtonClose />
      <StyledWellDoneModalTitle>Well done</StyledWellDoneModalTitle>
      <StyledWellDoneModalContainer $answers={false}>
        {renderAnswerList(correctAnswers, "Сorrect answers")}
        {renderAnswerList(wrongAnswers, "Mistakes")}
      </StyledWellDoneModalContainer>
      <StyledWellDoneModalBook_div></StyledWellDoneModalBook_div>
    </StyledWellDoneModalWrapper>
  );
};

export default WellDoneModal;
