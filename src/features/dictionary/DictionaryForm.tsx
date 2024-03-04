import { ChangeEvent, FormEvent, useState } from "react";

import { FormEl } from "../../components/Form";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import { FormProps } from "../../types";

const DictionaryForm = ({ onSubmit }: FormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [inputRuValue, setRuValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ en: inputValue, ru: inputRuValue });
    setInputValue("");
    setRuValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleRuChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRuValue(e.target.value);
  };
  return (
    <FormEl onSubmit={handleSubmit}>
      <Input
        placeholder="Name of Card"
        value={inputValue}
        handleChange={handleChange}
      />
      <Input
        placeholder="Название карточки"
        value={inputRuValue}
        handleChange={handleRuChange}
      />

      <SubmitButton
        disabled={inputValue === "" || inputRuValue === ""}
        text="Add"
        type="submit"
      />
    </FormEl>
  );
};

export default DictionaryForm;
