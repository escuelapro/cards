import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  overflow-y: hidden;

  @media (max-width: 767px) {
    padding: 10px;
    overflow-y: scroll;
  }
`;
