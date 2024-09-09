import { FC } from "react";
import Filters from "../Filters/Filters";
import Statistics from "../Statistics/Statistics";
import AddWord from "../AddWord/AddWord";
import {
  StyledDasnboard_div,
  StyledDasnboardWrapper,
} from "./Dashboard.styled";

const Dashboard: FC = () => {
  return (
    <StyledDasnboardWrapper>
      <Filters />
      <StyledDasnboard_div>
        <Statistics />
        <AddWord />
      </StyledDasnboard_div>
    </StyledDasnboardWrapper>
  );
};

export default Dashboard;
