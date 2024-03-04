import { useDispatch } from "react-redux";

import Main from "../components/Main";
import { Title } from "../components/Title";

import { Content } from "../components/Content";
import DictionariesList from "../features/dictionary/DictionariesList";
import { addDictionary } from "../features/dictionary/dictionarySlice";
import DictionaryForm from "../features/dictionary/DictionaryForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { clearActiveCard } from "../features/word/wordsSlice";

const DictionaryPage = () => {
  const dispatch = useDispatch();

  const handleSubmitDictionary = (payload: { en: string; ru: string }) => {
    dispatch(addDictionary(payload));
  };

  const params = useParams();

  useEffect(() => {
    if (!params.slug) {
      dispatch(clearActiveCard());
    }
  }, [params, dispatch]);

  return (
    <Main>
      <Title>Dictionary List</Title>
      <Content>
        <DictionaryForm onSubmit={handleSubmitDictionary} />
        <DictionariesList />
      </Content>
    </Main>
  );
};

export default DictionaryPage;
