import styled from "styled-components";
import { useSelector } from "react-redux";

import SingleWord from "./SingleWord";
import { selectWordsList } from "./wordsSlice";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";

const WordsListEl = styled(TableContainer)`
  flex: 1;
  overflow: auto;
  text-align: center;

  & table {
    font-family: "Open Sans", sans-serif;
    & thead {
    }

    & td,
    th {
      border-bottom: 1px solid black;
    }
    & th {
      color: gray;
      background-color: #18191f;
      padding: 10px;
    }
    & td {
      vertical-align: middle;
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    overflow: visible;
  }
`;

const WarningEl = styled.span`
  color: #f6a89e;
`;

const WordsList = () => {
  const allWords = useSelector(selectWordsList);

  useEffect(() => {}, [allWords]);
  return (
    <>
      {(allWords.length >= 5 && allWords.length <= 20) || (
        <WarningEl>You need add from 5 to 20 words</WarningEl>
      )}
      <WordsListEl>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">№</TableCell>
              <TableCell align="center">Espanol</TableCell>
              <TableCell align="center">Russian</TableCell>
              <TableCell align="center">English</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {allWords.map((word, index) => (
              <SingleWord key={index} {...word} number={index + 1} />
            ))}
          </tbody>
        </Table>
      </WordsListEl>
    </>
  );
};

export default WordsList;
