import styled from "styled-components";
import theme from "../../styles/theme.constants";

export const PostStyled = styled.div`
  width: 50vw;
  background: ${theme.colors.dark};
  border-radius: 5px;
  border: 1px solid var(--color-black, #000);

  margin-bottom: 3rem;
  padding: 1rem;

  .identify {
    display: flex;

    .photo {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;

        margin-right: 1rem;
      }

      p {
        font-size: 14px;
      }
  }

  .type {
    display: flex;

    p {
      margin-left: 0.5rem;
      text-transform: capitalize;
    }
  }
  
  }
`;
