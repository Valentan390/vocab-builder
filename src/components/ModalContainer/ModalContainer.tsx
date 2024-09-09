import {
  FC,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import useModalHandler from "../../hooks/useModalHandler";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { StyledModalContainerBackdrop } from "./ModalContainer.styled";
import { containerVariants } from "../../helpers/componentsData";
import { useNavigate } from "react-router-dom";

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer: FC<ModalContainerProps> = ({ children }) => {
  const element = useMemo(() => document.createElement("div"), []);
  const modalRootElementRef = useRef<HTMLElement>(
    document.getElementById("ModalRoot")
  );
  const { handleCloseModal, openModal, contentModal } = useModalHandler();
  const navigate = useNavigate();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && openModal) {
        handleCloseModal();
      }

      if (contentModal === "WellDoneModal") {
        navigate("/dictionary");
      }
    },
    [openModal, handleCloseModal, contentModal, navigate]
  );

  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        handleCloseModal();
      }

      if (contentModal === "WellDoneModal") {
        navigate("/dictionary");
      }
    },
    [handleCloseModal, contentModal, navigate]
  );

  useEffect(() => {
    const currentModalRootElement = modalRootElementRef.current;
    if (!currentModalRootElement) return;

    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    currentModalRootElement.appendChild(element);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (!currentModalRootElement) return;
      currentModalRootElement.removeChild(element);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [element, handleKeyDown, openModal]);

  return createPortal(
    <AnimatePresence>
      {openModal && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <StyledModalContainerBackdrop onClick={handleBackdropClick}>
            {children}
          </StyledModalContainerBackdrop>
        </motion.div>
      )}
    </AnimatePresence>,
    element
  );
};

export default ModalContainer;
