import styled from "styled-components";
import { useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { ISingleWordProps } from "../../types";
import { deleteWord } from "./wordsSlice";

import { IconButton, TableRow } from "@mui/material";

const SingleWordEl = styled(TableRow)`
  & td {
    padding: 5px 0;
  }
  & input {
    height: 100%;
  }
`;

const SingleWord = ({ number, learnWord, translate }: ISingleWordProps) => {
  const { en, ru } = translate;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWord(learnWord));
  };

  return (
    <SingleWordEl>
      <td>{number}</td>
      <td>{learnWord}</td>
      <td>{ru}</td>
      <td>{en}</td>
      <td>
        <IconButton
          color="error"
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
      </td>
    </SingleWordEl>
  );
};

export default SingleWord;
