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

  .loading {
    padding: 0.5em 2.2em 0.5em 1em;
    border-radius: 0.3em;
    color: ${theme.colors.light};
    border: 1px solid ${theme.colors.light};
    background: ${theme.colors.dark};
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font: 300 1em/1.5 "Lato", sans-serif;
    letter-spacing: 1px;
    &:after {
      content: "...";
      width: 0;
      position: absolute;
      overflow: hidden;
      animation: dots-animation 1s infinite;
    }
  }

  @keyframes dots-animation {
    0% {
      width: 0em;
    }
    50% {
      width: 1.2em;
    }
    100% {
      width: 0em;
    }
  }
`;
