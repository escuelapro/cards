import { ChangeEvent, FormEvent, useRef, useState } from "react";
import styled from "styled-components";

import { FormProps } from "../types";
import { Button, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const FormEl = styled.form`
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const Input = styled(TextField)`
  border-radius: 6px;
  flex: 1 0 auto;
  @media (max-width: 479px) {
    padding-left: 4px;
  }
`;
const SubmitButton = styled(Button)`
  border-radius: 6px;
  padding: 5px 12px;
  @media (max-width: 479px) {
    flex: 1;
  }
`;

const Form = ({ placeholder, onSubmit, onBlur }: FormProps) => {
  const [inputValue, setInputValue] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (onBlur) {
        onBlur(e.target.value);
      }
    }, 1000);
  };
  return (
    <FormEl onSubmit={handleSubmit}>
      <Input
        color="info"
        label={placeholder}
        placeholder={placeholder}
        type="text"
        value={inputValue}
        onChange={handleChange}
        size="small"
      />
      <SubmitButton
        type="submit"
        disabled={inputValue === ""}
        color="primary"
        startIcon={<AddCircleIcon />}
        variant="contained"
      >
        Add
      </SubmitButton>
    </FormEl>
  );
};

export default Form;
