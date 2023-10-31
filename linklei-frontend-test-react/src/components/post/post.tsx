import { PostStyled } from "./post.style";

export function Header() {
  return (
    <PostStyled>
      <a href="#">
        <img
          width="64px"
          height="55px"
          className="logo"
          src="logo.svg"
          alt="linklei"
        />
      </a>
    </PostStyled>
  );
}
