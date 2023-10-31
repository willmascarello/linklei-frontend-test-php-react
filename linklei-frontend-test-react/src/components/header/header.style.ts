import styled from "styled-components";
import theme from "../../styles/theme.constants";

export const HeaderStyled = styled.div`
  width: 100vw;
  height: 9rem;
  border-bottom: 1px solid ${theme.colors.primary};
  background: ${theme.colors.dark};
  position: fixed;
  top: 0;

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
