import { IButtonProps } from "../types";
import { Button } from "@mui/material";

const ButtonComponent = ({ handleSave, disabled }: IButtonProps) => {
  return (
    <Button
      onClick={handleSave}
      disabled={disabled}
      variant="contained"
      color="primary"
    >
      Save card
    </Button>
  );
};

export default ButtonComponent;
