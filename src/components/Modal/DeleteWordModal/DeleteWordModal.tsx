import { FC } from "react";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import {
  StyledDeleteWordButtonClose,
  StyledDeleteWordButtonDelete,
  StyledDeleteWordModalContainer,
  StyledDeleteWordModalText,
  StyledDeleteWordModalWrapper,
} from "./DeleteWordModal.styled";
import useModalHandler from "../../../hooks/useModalHandler";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxHooks";
import { selectIdWord } from "../../../redux/word/wordSelectors";
import { deleteWordThunk } from "../../../redux/word/operationsWord";
import { toast } from "react-toastify";

const DeleteWordModal: FC = () => {
  const { handleCloseModal } = useModalHandler();
  const dispatch = useAppDispatch();
  const id = useAppSelector(selectIdWord);

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Unknown error occurred");
    }
  };

  const deleteWord = async () => {
    try {
      await dispatch(deleteWordThunk(id)).unwrap();
      handleCloseModal();
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <StyledDeleteWordModalWrapper>
      <ButtonClose />
      <StyledDeleteWordModalText>
        Are you sure you want to delete the selected word?
      </StyledDeleteWordModalText>
      <StyledDeleteWordModalContainer>
        <StyledDeleteWordButtonClose type="button" onClick={handleCloseModal}>
          Close
        </StyledDeleteWordButtonClose>
        <StyledDeleteWordButtonDelete type="button" onClick={deleteWord}>
          Delete
        </StyledDeleteWordButtonDelete>
      </StyledDeleteWordModalContainer>
    </StyledDeleteWordModalWrapper>
  );
};

export default DeleteWordModal;
