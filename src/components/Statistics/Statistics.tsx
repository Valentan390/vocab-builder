import { FC } from "react";
import {
  StyledStatistics,
  StyledStatisticsStudy,
  StyledStatisticsWrapper,
} from "./Statistics.styled";
import { useAppSelector } from "../../hooks/useReduxHooks";

import { selectTotalCount } from "../../redux/word/wordSelectors";

const Statistics: FC = () => {
  const totalCount = useAppSelector(selectTotalCount);

  return (
    <StyledStatisticsWrapper>
      <StyledStatisticsStudy>To study:</StyledStatisticsStudy>
      <StyledStatistics>{totalCount}</StyledStatistics>
    </StyledStatisticsWrapper>
  );
};

export default Statistics;
