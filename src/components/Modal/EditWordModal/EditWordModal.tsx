import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxHooks";
import { createIdFilterWord } from "../../../redux/word/wordSelectors";
import {
  StyledEditWordButtonCancel,
  StyledEditWordButtonSave,
  StyledEditWordModal_p,
  StyledEditWordModalContainer,
  StyledEditWordModalForm,
  StyledEditWordModalIconContainer,
  StyledEditWordModalInput,
  StyledEditWordModalLabel,
  StyledEditWordModalWrapper,
} from "./EditWordModal.styled";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import Icon from "../../Icon/Icon";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IEditWord } from "../../../helpers/interfeceData";
import { schemaEditWord } from "../../../helpers/validation";
import useModalHandler from "../../../hooks/useModalHandler";
import { editWordThunk } from "../../../redux/word/operationsWord";
import { toast } from "react-toastify";
import { StyledAddWordModalError } from "../AddWordModal/AddWordModal.styled";
import { useMediaQuery } from "react-responsive";

const EditWordModal: FC = () => {
  const word = useAppSelector(createIdFilterWord);
  const { handleCloseModal } = useModalHandler();
  const dispatch = useAppDispatch();
  const isMobaile = useMediaQuery({ query: "(max-width: 767px)" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IEditWord>({
    defaultValues: {
      ua: word?.ua,
      en: word?.en,
      isIrregular: word?.isIrregular,
      category: word?.category,
      id: word?._id,
    },
    mode: "onTouched",
    resolver: yupResolver(schemaEditWord),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await dispatch(editWordThunk(data)).unwrap();
      handleCloseModal();
      reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      toast.error(errorMessage);
    }
  });

  const { ua, en } = watch();

  const renderInput = (
    iconName: "icon-ukraine" | "icon-united-kingdom",
    country: "Ukrainian" | "English",
    field: "ua" | "en",
    value: typeof ua | typeof en
  ) => (
    <StyledEditWordModalLabel>
      <StyledEditWordModalIconContainer>
        <Icon
          iconName={iconName}
          width={isMobaile ? "28" : "32"}
          height={isMobaile ? "28" : "32"}
        />
        <StyledEditWordModal_p>{country}</StyledEditWordModal_p>
      </StyledEditWordModalIconContainer>
      <StyledEditWordModalInput
        type="text"
        {...register(field)}
        value={value}
      />
      <StyledAddWordModalError>
        {errors[field]?.message}
      </StyledAddWordModalError>
    </StyledEditWordModalLabel>
  );

  return (
    <StyledEditWordModalWrapper>
      <ButtonClose />
      <StyledEditWordModalForm onSubmit={onSubmit}>
        {renderInput("icon-ukraine", "Ukrainian", "ua", ua)}
        {renderInput("icon-united-kingdom", "English", "en", en)}
        <StyledEditWordModalContainer>
          <StyledEditWordButtonSave type="submit">
            Save
          </StyledEditWordButtonSave>
          <StyledEditWordButtonCancel type="button" onClick={handleCloseModal}>
            Cancel
          </StyledEditWordButtonCancel>
        </StyledEditWordModalContainer>
      </StyledEditWordModalForm>
    </StyledEditWordModalWrapper>
  );
};

export default EditWordModal;
