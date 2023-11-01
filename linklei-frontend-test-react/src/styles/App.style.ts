import styled from "styled-components";
import theme from "./theme.constants";

export const AppStyled = styled.div`
  background-color: ${theme.colors.background};
  color: ${theme.colors.light};

  .app {
    text-align: center;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .feed {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
