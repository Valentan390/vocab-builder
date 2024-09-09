import { FC, useState } from "react";

import Box from "@mui/material/Box";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Icon from "../../Icon/Icon";
import {
  CustomIconButton,
  CustomPaper,
  PopperButton,
} from "./ActionsBtnCustomStyle";
import useModalHandler from "../../../hooks/useModalHandler";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import { setIdWord } from "../../../redux/word/wordSlice";

interface ActionsBtnProps {
  id_Word: string;
}

const ActionsBtn: FC<ActionsBtnProps> = ({ id_Word }) => {
  const { handleOpenModal } = useModalHandler();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const handleClickPopperButton = (nameOpenModal: string) => {
    setOpen((prev) => !prev);
    handleOpenModal(nameOpenModal);
    dispatch(setIdWord(id_Word));
  };

  return (
    <Box>
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <CustomPaper>
              <PopperButton
                type="button"
                onClick={() => handleClickPopperButton("EditWordModal")}
              >
                <Icon
                  iconName="icon-edit-01"
                  width="16"
                  height="16"
                  stroke="#85AA9F"
                  fill="none"
                />
                Edit
              </PopperButton>
              <PopperButton
                type="button"
                onClick={() => handleClickPopperButton("DeleteWordModal")}
              >
                <Icon
                  iconName="icon-trash-03"
                  width="16"
                  height="16"
                  stroke="#85AA9F"
                  fill="none"
                />
                Delete
              </PopperButton>
            </CustomPaper>
          </Fade>
        )}
      </Popper>

      <Grid container justifyContent="center">
        <Grid item>
          <CustomIconButton onClick={handleClick("bottom-end")}>
            <Icon
              iconName="icon-Date"
              width="12"
              height="10"
              fill="rgba(18, 20, 23, 0.50)"
            />
          </CustomIconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActionsBtn;
