import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  StyledTrainingRoom,
  StyledTrainingRoomContainer,
  StyledTrainingRoomNext_Button,
  StyledTrainingRoom_Button,
  StyledTrainingRoom_Input,
  StyledTrainingRoom_Label,
  StyledTrainingRoom_div,
  StyledTrainingRoom_p,
} from "./TrainingRoom.styled";
import Icon from "../Icon/Icon";
import { IAnswersWords } from "../../helpers/interfeceData";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { selectTasksUser } from "../../redux/word/wordSelectors";
import { getChecingResultTasksThunk } from "../../redux/word/operationsWord";
import { useNavigate } from "react-router-dom";
import useModalHandler from "../../hooks/useModalHandler";
import { useMediaQuery } from "react-responsive";

interface TrainingRoomProps {
  setNumberAnswers: Dispatch<SetStateAction<number>>;
  numberAnswers: number;
}

const TrainingRoom: FC<TrainingRoomProps> = ({
  setNumberAnswers,
  numberAnswers,
}) => {
  const [answersTasksUser, setAnswersTasksUser] = useState<IAnswersWords[]>([]);
  const [index, setIndex] = useState(0);

  const [translationWord, setTranslationWord] = useState("");
  const tasksUser = useAppSelector(selectTasksUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleOpenModal } = useModalHandler();
  const isTabletAndDesctop = useMediaQuery({ query: "(min-width: 768px)" });

  const currentTask = useMemo(() => tasksUser[index] || {}, [tasksUser, index]);
  const { task, en, ua } = currentTask;

  const isLastTask = numberAnswers < tasksUser?.length;
  const buttonText = index === tasksUser.length - 1 ? "Finish" : "Next";
  const iconTask = task === "en" ? "icon-united-kingdom" : "icon-ukraine";
  const textLabel = task === "en" ? "English" : "Ukrainian";
  const oppositeIconTask =
    task === "en" ? "icon-ukraine" : "icon-united-kingdom";
  const oppositeTextLabel = task === "en" ? "Ukrainian" : "English";
  const oppositeValue = task === "en" ? ua : en;

  const changeIndex = useCallback(() => {
    setNumberAnswers((prevNumber) => prevNumber + 1);

    if (translationWord !== "") {
      setAnswersTasksUser((prevAnswers) => [
        ...prevAnswers,
        { ...currentTask, [task]: translationWord },
      ]);
    }

    setTranslationWord("");

    if (index < tasksUser.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, [
    translationWord,
    currentTask,
    index,
    tasksUser.length,
    setNumberAnswers,
    task,
  ]);

  const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTranslationWord(event?.target.value);
  }, []);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(getChecingResultTasksThunk(answersTasksUser)).unwrap();

      handleOpenModal("WellDoneModal");
    } catch (error) {
      navigate("/dictionary");
    }
  };

  return (
    <StyledTrainingRoom onSubmit={submit}>
      <StyledTrainingRoom_div>
        <StyledTrainingRoom_Label>
          <StyledTrainingRoom_Input
            type="text"
            placeholder="Введіть переклад"
            $borderBottom={true}
            value={translationWord}
            onChange={handleInput}
            name="translation"
          />
          {isLastTask && (
            <StyledTrainingRoomNext_Button type="button" onClick={changeIndex}>
              {buttonText}
              <Icon
                iconName="icon-switch-horizontal"
                width="20"
                height="20"
                stroke="var(--greyGreen)"
              />
            </StyledTrainingRoomNext_Button>
          )}
          <StyledTrainingRoom_p>
            <Icon
              iconName={iconTask}
              width={isTabletAndDesctop ? "32" : "28"}
              height={isTabletAndDesctop ? "32" : "28"}
            />
            {textLabel}
          </StyledTrainingRoom_p>
        </StyledTrainingRoom_Label>

        <StyledTrainingRoom_Label>
          <StyledTrainingRoom_Input
            type="text"
            $borderBottom={false}
            value={isLastTask ? oppositeValue : "Завдання виконано"}
            readOnly
            name="tasks"
          />
          <StyledTrainingRoom_p>
            <Icon
              iconName={oppositeIconTask}
              width={isTabletAndDesctop ? "32" : "28"}
              height={isTabletAndDesctop ? "32" : "28"}
            />
            {oppositeTextLabel}
          </StyledTrainingRoom_p>
        </StyledTrainingRoom_Label>
      </StyledTrainingRoom_div>

      <StyledTrainingRoomContainer $button={true}>
        <StyledTrainingRoom_Button $buttonSave={true} type="submit">
          Save
        </StyledTrainingRoom_Button>
        <StyledTrainingRoom_Button $buttonSave={false} type="button">
          Cancel
        </StyledTrainingRoom_Button>
      </StyledTrainingRoomContainer>
    </StyledTrainingRoom>
  );
};

export default TrainingRoom;
