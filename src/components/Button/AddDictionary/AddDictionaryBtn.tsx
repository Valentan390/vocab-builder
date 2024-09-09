import { FC } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Icon from "../../Icon/Icon";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import { addNewWordThunk } from "../../../redux/word/operationsWord";

interface AddDictionaryBtnProps {
  id_Word: string;
}

const AddDictionaryBtn: FC<AddDictionaryBtnProps> = ({ id_Word }) => {
  const dispatch = useAppDispatch();

  return (
    <Stack sx={{ justifyContent: "center" }} direction="row" spacing={1}>
      <IconButton onClick={() => dispatch(addNewWordThunk(id_Word))}>
        <Icon
          iconName="icon-switch-horizontal"
          width="20"
          height="20"
          stroke="var(--greyGreen)"
        />
      </IconButton>
    </Stack>
  );
};

export default AddDictionaryBtn;
