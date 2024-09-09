import { FC } from "react";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import {
  StyledAddWordModal_form,
  StyledAddWordModalAddWord,
  StyledAddWordModalButtonAdd,
  StyledAddWordModalButtonCancel,
  StyledAddWordModalButtonWrapper,
  StyledAddWordModalController_div,
  StyledAddWordModalDescription,
  StyledAddWordModalError,
  StyledAddWordModalIconWrapper,
  StyledAddWordModalInput,
  StyledAddWordModalInputWrapper,
  StyledAddWordModalLabel,
  StyledAddWordModalWrapper,
  StyledAddWordModalСountry,
} from "./AddWordModal.styled";
import Icon from "../../Icon/Icon";
import useModalHandler from "../../../hooks/useModalHandler";
import AddWordCategoriesSelect from "../../AddWordCategoriesSelect/AddWordCategoriesSelect";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectTypeVerb from "../../SelectTypeVerb/SelectTypeVerb";
import { schemaAddWord } from "../../../helpers/validation";
import { INewWord } from "../../../helpers/interfeceData";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import { craeteNewWordThunk } from "../../../redux/word/operationsWord";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";

const AddWordModal: FC = () => {
  const { handleCloseModal } = useModalHandler();
  const dispatch = useAppDispatch();
  const isMobaile = useMediaQuery({ query: "(max-width: 767px)" });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<INewWord>({
    mode: "onTouched",
    resolver: yupResolver(schemaAddWord),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data.category !== "verb") delete data.isIrregular;
      await dispatch(craeteNewWordThunk(data));
      handleCloseModal();
      reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      toast.error(errorMessage);
    }
  });

  const category = watch("category");
  const isIrregular = watch("isIrregular");

  const renderInput = (
    iconName: string,
    country: string,
    field: "ua" | "en"
  ) => {
    return (
      <StyledAddWordModalLabel>
        <StyledAddWordModalIconWrapper>
          <Icon
            iconName={iconName}
            width={isMobaile ? "28" : "32"}
            height={isMobaile ? "28" : "32"}
          />
          <StyledAddWordModalСountry>{country}</StyledAddWordModalСountry>
        </StyledAddWordModalIconWrapper>
        <StyledAddWordModalInput
          type="text"
          {...register(field)}
          $error={!!errors[field]}
        />
        {errors[field] && (
          <StyledAddWordModalError>
            {errors[field]?.message}
          </StyledAddWordModalError>
        )}
      </StyledAddWordModalLabel>
    );
  };

  const renderController = (name: "category" | "isIrregular") => (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => {
        switch (name) {
          case "category":
            return <AddWordCategoriesSelect {...field} errors={errors} />;
          case "isIrregular":
            return <SelectTypeVerb {...field} errors={errors} />;
        }
      }}
    />
  );

  return (
    <StyledAddWordModalWrapper>
      <ButtonClose />
      <StyledAddWordModalAddWord>Add word</StyledAddWordModalAddWord>
      <StyledAddWordModalDescription $format={false}>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </StyledAddWordModalDescription>

      <StyledAddWordModal_form action="" onSubmit={onSubmit}>
        <StyledAddWordModalController_div>
          {renderController("category")}
          {category === "verb" && renderController("isIrregular")}

          {isIrregular && category === "verb" && (
            <StyledAddWordModalDescription $format={true}>
              Such data must be entered in the format I form-II form-III form.
            </StyledAddWordModalDescription>
          )}
        </StyledAddWordModalController_div>

        <StyledAddWordModalInputWrapper>
          {renderInput("icon-ukraine", "Ukrainian", "ua")}
          {renderInput("icon-united-kingdom", "English", "en")}
        </StyledAddWordModalInputWrapper>

        <StyledAddWordModalButtonWrapper>
          <StyledAddWordModalButtonAdd type="submit">
            Add
          </StyledAddWordModalButtonAdd>
          <StyledAddWordModalButtonCancel
            type="button"
            onClick={handleCloseModal}
          >
            Cancel
          </StyledAddWordModalButtonCancel>
        </StyledAddWordModalButtonWrapper>
      </StyledAddWordModal_form>
    </StyledAddWordModalWrapper>
  );
};

export default AddWordModal;
