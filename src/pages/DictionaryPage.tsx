import { useDispatch } from "react-redux";

import Main from "../components/Main";
import { Title } from "../components/Title";
import Form from "../components/Form";
import { Content } from "../components/Content";
import DictionariesList from "../features/dictionary/DictionariesList";
import { addDictionary } from "../features/dictionary/dictionarySlice";

const DictionaryPage = () => {
  const dispatch = useDispatch();

  const handleSubmitDictionary = (payload: string) => {
    dispatch(addDictionary(payload));
  };

  return (
    <Main>
      <Title>Dictionary List</Title>
      <Content>
        <Form onSubmit={handleSubmitDictionary} placeholder="Add dictionary" />
        <DictionariesList />
      </Content>
    </Main>
  );
};

export default DictionaryPage;
