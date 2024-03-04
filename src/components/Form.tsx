import styled from "styled-components";

export const FormEl = styled.form`
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;
