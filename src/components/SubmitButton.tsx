import { Button } from "@mui/material";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { SubmitButtonProps } from "../types";

const SubmitButtonEl = styled(Button)`
  border-radius: 6px;
  padding: 5px 12px;
  @media (max-width: 479px) {
    flex: 1;
  }
`;

const SubmitButton = ({ disabled, text, type, onClick }: SubmitButtonProps) => {
  return (
    <SubmitButtonEl
      type={type}
      disabled={disabled}
      color="primary"
      startIcon={<AddCircleIcon />}
      variant="contained"
    >
      {text}
    </SubmitButtonEl>
  );
};

export default SubmitButton;
