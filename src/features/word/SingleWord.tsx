import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { ISingleWordProps, IWord } from "../../types";
import { deleteWord, updateWord } from "./wordsSlice";
import { fetchTranslate } from "../../utils";
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
  const [isInput, setIsInput] = useState(false);
  const [sp, setSp] = useState(learnWord);
  const [rus, setRus] = useState(ru);
  const [eng, setEng] = useState(en);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    setIsInput(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSp(e.target.value);
  };

  const handleSubmit = async () => {
    setIsInput(false);
    try {
      const translations = await Promise.all([
        fetchTranslate(sp, "es", "ru"),
        fetchTranslate(sp, "es", "en"),
      ]);
      setRus(translations[0].toLowerCase());
      setEng(translations[1].toLowerCase());
      const updatedWord: IWord = {
        learnWord: sp,
        translate: {
          en: translations[0].toLowerCase(),
          ru: translations[1].toLowerCase(),
        },
      };

      dispatch(updateWord({ updatedWord, number }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    dispatch(deleteWord(learnWord));
  };

  return (
    <SingleWordEl onClick={handleUpdate}>
      <td>{number}</td>
      <td>
        {isInput ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              autoFocus
              onBlur={handleSubmit}
              onChange={handleChange}
              value={sp}
            />
          </form>
        ) : (
          sp
        )}
      </td>
      <td>{rus}</td>
      <td>{eng}</td>
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
