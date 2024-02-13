import { useState, MouseEvent } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { deleteDictionary } from "./dictionarySlice";
import { IDictionaryItemProps } from "../../types";
import { IconButton } from "@mui/material";

const DictionaryItemEl = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 3px solid;
  padding: 10px;
  gap: 40px;

  & h3 {
    flex: 1;
    text-align: start;
  }
  & div {
    width: 100px;
    height: 100px;
    border-radius: 12px;

    & img,
    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }
`;

const DictionaryItem = ({ title, coverImage }: IDictionaryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(deleteDictionary(title.en));
  };

  return (
    <Link to={`cards/${title.en}`}>
      <DictionaryItemEl
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          {coverImage ? (
            <img src={coverImage} alt="" />
          ) : (
            <InsertPhotoIcon color="disabled" />
          )}
        </div>
        <h3>{title.en}</h3>
        {isHovered && (
          <IconButton onClick={handleDelete} size="large" color="error">
            <DeleteForeverIcon />
          </IconButton>
        )}
      </DictionaryItemEl>
    </Link>
  );
};

export default DictionaryItem;
