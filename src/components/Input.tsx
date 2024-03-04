import { TextField } from "@mui/material";
import React, { ChangeEvent, forwardRef, useState } from "react";
import styled from "styled-components";
import { InputProps } from "../types";
import { ref } from "firebase/storage";

// const InputEl = styled(TextField)`
//   border-radius: 6px;
//   flex: 1 0 auto;
//   @media (max-width: 479px) {
//     padding-left: 4px;
//   }
// `;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, value, handleChange }, ref) => {
    return (
      <TextField
        inputRef={ref}
        color="info"
        label={placeholder}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleChange}
        size="small"
      />
    );
  }
);

export default Input;
