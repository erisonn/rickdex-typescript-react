import { ReactComponent as Logo } from "../static/logo.svg";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 70px;
  background-color: whitesmoke;
  svg {
    height: 50px;
    width: 200px;
    margin-top: 10px;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
}
