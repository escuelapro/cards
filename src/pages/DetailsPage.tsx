import { useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imagesRef } from "../app/firebase";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import Main from "../components/Main";
import { Title } from "../components/Title";
import { Content } from "../components/Content";
import WordsList from "../features/word/WordsList";
import DetailsInput from "../features/word/DetailsInput";
import {
  addCoverImage,
  getActiveCard,
  selectCardTitle,
  selectImage,
} from "../features/word/wordsSlice";

const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 100%;
  & .fileLabel {
    position: relative;
    cursor: pointer;
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    & input {
      display: none;
    }
    & img,
    svg {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const DetailsPage = () => {
  const coverImage = useSelector(selectImage);
  const { en } = useSelector(selectCardTitle);
  const dispatch = useDispatch();
  const { slug } = useParams();

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageRef = ref(imagesRef, file.name);
      await uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url: string) => {
          dispatch(addCoverImage(url));
        });
      });
    }
  };

  useEffect(() => {
    if (slug) {
      dispatch(getActiveCard(slug));
    }
  }, [slug, dispatch]);
  return (
    <Main>
      <Title>{en}</Title>
      <Content>
        <DetailsHeader>
          <label htmlFor="file" className="fileLabel">
            <input type="file" id="file" onChange={handleFileUpload} />
            {coverImage ? (
              <img src={coverImage} alt="" />
            ) : (
              <AddPhotoAlternateIcon color="disabled" />
            )}
          </label>
          <DetailsInput />
        </DetailsHeader>
        <WordsList />
      </Content>
    </Main>
  );
};

export default DetailsPage;
