import styled from "styled-components";
import theme from "../../styles/theme.constants";

export const ModalCreateEditStyled = styled.div`
  width: 100vw;
  height: 9rem;
  border-bottom: 1px solid var(--color-primary, #2d64d1);
  background: ${theme.colors.dark};
  position: fixed;

  .logo {
    width: max-content;
    height: 100%;
    cursor: pointer;

    img {
      display: block;
      height: 100%;
      padding: 0 2rem 0 4rem;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`;
