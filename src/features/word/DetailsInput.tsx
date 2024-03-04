import { ChangeEvent, FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateDictionary } from "../dictionary/dictionarySlice";

import { RootState } from "../../app/store";
import ButtonComponent from "../../components/ButtonComponent";

import { FormEl } from "../../components/Form";
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";
import { IWord } from "../../types";
import { addWord } from "./wordsSlice";

const DetailsForm = styled(FormEl)`
  flex-direction: column;
  align-items: stretch;
  & span {
    display: flex;
    justify-content: space-between;
  }
`;

const HeaderInputEl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0;
  gap: 10px;
  flex: 1;

  & .translation {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;

    & input {
      display: inline-block;
      padding-left: 10px;
      font-size: 20px;
      font-weight: 700;
      width: 100%;
    }
  }
`;

const DetailsInput = () => {
  const [word, setWord] = useState("");
  const [english, setEnglish] = useState("");
  const [russian, setRussian] = useState("");
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const activeCard = useSelector((state: RootState) => state.activeCard);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleEnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnglish(e.target.value);
  };

  const handleRuChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRussian(e.target.value);
  };

  const handleSave = () => {
    dispatch(updateDictionary(activeCard));
    navigate("/");
  };

  const handleSubmitWord = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newWord: IWord = {
      learnWord: word,
      translate: {
        en: english.toLowerCase(),
        ru: russian.toLowerCase(),
      },
    };
    if (russian !== "" && english !== "" && word !== "") {
      dispatch(addWord(newWord));
      setWord("");
      setEnglish("");
      setRussian("");
      if (ref.current) {
        ref.current.focus();
      }
    }
  };

  return (
    <HeaderInputEl>
      <DetailsForm onSubmit={handleSubmitWord}>
        <Input
          ref={ref}
          placeholder="introduce una palabra"
          value={word}
          handleChange={handleChange}
        />
        <Input
          placeholder="enter word"
          value={english}
          handleChange={handleEnChange}
        />
        <Input
          placeholder="введите слово"
          value={russian}
          handleChange={handleRuChange}
        />
        <span>
          <SubmitButton
            type="submit"
            text="Add word"
            disabled={word === "" || english === "" || russian === ""}
          />
          <ButtonComponent
            handleSave={handleSave}
            disabled={
              activeCard.words.length < 5 || activeCard.words.length > 20
            }
          />
        </span>
      </DetailsForm>
    </HeaderInputEl>
  );
};

export default DetailsInput;
