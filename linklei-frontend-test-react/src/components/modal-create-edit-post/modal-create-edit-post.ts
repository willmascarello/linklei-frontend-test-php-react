import styled from "styled-components";
import theme from "../../styles/theme.constants";

export const ModalCreateEditPostStyled = styled.div`
  position: relative;
  width: calc(100% - 2rem);
  height: 4.5rem;
  background: ${theme.colors.dark};
  margin: 1rem;
  margin-bottom: 3rem;
  margin-top: calc(9rem + 1rem);
  border-radius: 5px;

  text-align: center;

  button {
    background-color: ${theme.colors.primary};
    border: none;

    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;
