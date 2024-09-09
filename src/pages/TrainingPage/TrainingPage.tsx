import { FC, useEffect, useState } from "react";
import MainSectionAuth from "../../components/MainSectionAuth/MainSectionAuth";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { getWordsTasksUserThunk } from "../../redux/word/operationsWord";
import WhenThereAreNoWords from "../../components/WhenThereAreNoWords/WhenThereAreNoWords";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {
  selectIsLoading,
  selectTasksUser,
} from "../../redux/word/wordSelectors";
import TrainingRoom from "../../components/TrainingRoom/TrainingRoom";
import { StyledTrainingPage_div } from "./TrainingPage.styled";
import Loader from "../../components/Loader/Loader";

const TrainingPage: FC = () => {
  const dispatch = useAppDispatch();
  const tasksUser = useAppSelector(selectTasksUser);
  const [numberAnswers, setNumberAnswers] = useState(0);
  const isLoading = useAppSelector(selectIsLoading);

  const percentageAnswersTasksUser = Math.round(
    (100 * numberAnswers) / tasksUser?.length
  );

  useEffect(() => {
    dispatch(getWordsTasksUserThunk());
  }, [dispatch]);

  return (
    <MainSectionAuth>
      {isLoading ? (
        <Loader />
      ) : tasksUser?.length <= 0 ? (
        <WhenThereAreNoWords />
      ) : (
        <>
          <StyledTrainingPage_div>
            <ProgressBar value={percentageAnswersTasksUser} />
          </StyledTrainingPage_div>
          <TrainingRoom
            setNumberAnswers={setNumberAnswers}
            numberAnswers={numberAnswers}
          />
        </>
      )}
    </MainSectionAuth>
  );
};

export default TrainingPage;
