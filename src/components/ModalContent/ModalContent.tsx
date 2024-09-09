import { FC } from "react";
import useModalHandler from "../../hooks/useModalHandler";
import BurgerMenuModal from "../Modal/BurgerMenuModal/BurgerMenuModal";
import AddWordModal from "../Modal/AddWordModal/AddWordModal";
import EditWordModal from "../Modal/EditWordModal/EditWordModal";
import DeleteWordModal from "../Modal/DeleteWordModal/DeleteWordModal";
import WellDoneModal from "../Modal/WellDoneModal/WellDoneModal";

const ModalContent: FC = () => {
  const { contentModal } = useModalHandler();

  switch (contentModal) {
    case "BurgerMenuModal":
      return <BurgerMenuModal />;
    case "AddWordModal":
      return <AddWordModal />;
    case "EditWordModal":
      return <EditWordModal />;
    case "DeleteWordModal":
      return <DeleteWordModal />;
    case "WellDoneModal":
      return <WellDoneModal />;
    default:
      return null;
  }
};

export default ModalContent;
