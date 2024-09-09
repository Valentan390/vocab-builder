import {
  selectContentModal,
  selectOpenModal,
} from "../redux/modal/modalSelectors";
import { setContentModal, setOpenModal } from "../redux/modal/modalSlise";
import { useAppDispatch, useAppSelector } from "./useReduxHooks";

const useModalHandler = () => {
  const openModal = useAppSelector(selectOpenModal);
  const contentModal = useAppSelector(selectContentModal);
  const dispatch = useAppDispatch();

  const handleOpenModal = (contentModal: string) => {
    dispatch(setOpenModal(true));
    dispatch(setContentModal(contentModal));
  };

  const handleCloseModal = () => {
    dispatch(setOpenModal(false));
    dispatch(setContentModal(""));
  };

  return { openModal, contentModal, handleCloseModal, handleOpenModal };
};

export default useModalHandler;
