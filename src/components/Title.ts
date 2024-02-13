import styled from "styled-components";

export const Title = styled.h1`
  position: sticky;
  top: 0;
  padding: 28px;
  font-size: 32px;
  font-weight: 700;
  border-bottom: 4px solid;
  text-transform: uppercase;
  text-align: center;
  @media (max-height: 479px) {
    font-size: 22px;
    padding: 15px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
    padding: 15px;
  }
`;
