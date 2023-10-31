import { ModalCreateEditStyled } from "./modal-creat-edit-post.style";

export function Header() {
  return (
    <ModalCreateEditStyled>
      <a href="#">
        <img
          width="64px"
          height="55px"
          className="logo"
          src="logo.svg"
          alt="linklei"
        />
      </a>
    </ModalCreateEditStyled>
  );
}
