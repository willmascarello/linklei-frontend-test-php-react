import { CreatePostStyled } from "./create-post.style";

export function Header() {
  return (
    <CreatePostStyled>
      <a href="#">
        <img
          width="64px"
          height="55px"
          className="logo"
          src="logo.svg"
          alt="linklei"
        />
      </a>
    </CreatePostStyled>
  );
}
