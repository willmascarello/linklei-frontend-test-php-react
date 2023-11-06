import styled from "styled-components";
import theme from "../../styles/theme.constants";

export const PostStyled = styled.div`
  width: 50vw;
  background: ${theme.colors.dark};
  border-radius: 5px;
  border: 1px solid ${theme.colors.black};

  margin-bottom: 3rem;
  padding: 1rem;

  @media (max-width: ${theme.responsive.sm}) {
    width: calc(100vw - 2rem);
    margin-bottom: 1rem;
  }

  .identify {
    display: flex;

    .photo {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;

      margin-right: 1rem;
    }

    .head {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .date {
        font-size: 14px;
      }
    }
  }

  .option {
    position: relative;

    button {
      background-color: transparent;
      color: ${theme.colors.light};
      border: none;
    }
    .openOption {
      width: 3rem;
      height: 3rem;
    }

    .optionModal {
      position: absolute;
      padding: 1rem;
      /* width: 8rem; */
      background: ${theme.colors.dark};
      border-radius: 5px;
      border: 1px solid ${theme.colors.black};

      @media (max-width: ${theme.responsive.sm}) {
        right: 0;
      }

      button {
        display: flex;
        margin-right: 1rem;

        svg {
          margin-right: 0.5rem;
        }
      }

      button:first-child {
        margin-bottom: 1rem;
      }
    }
  }

  .type {
    display: flex;

    p {
      margin-left: 0.5rem;
      text-transform: capitalize;
    }
  }

  .text {
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
`;
