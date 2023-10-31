import { HeaderStyled } from "./header.style";

export function Header() {
  return (
    <HeaderStyled>
      <div className="logo">
        {/* add onClic */}
        <img src="linklei_logo.svg" alt="linklei logo" />
      </div>
    </HeaderStyled>
  );
}
