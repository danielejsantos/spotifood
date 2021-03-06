import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
  }
`;

export const InputBlock = styled.div`
  justify-content: center;

  label {
    font-size: 13px;
    color: #8b8b8b;
  }

  @media (min-width: 800px) {
    align-items: center;
  }
`;