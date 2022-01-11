import styled from "styled-components";

interface PreviewProps {
  isDead: boolean;
}

export const Container = styled.div<PreviewProps>`
  filter: grayscale(${(props) => (props.isDead ? "100%" : "0%")});
  margin: 0.6rem;
  text-align: center;
  background-color: #eaeaea;
  width: 270px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  box-shadow: rgba(240, 46, 170, 0.4) 3px 3px, rgba(240, 46, 170, 0.3) 6px 6px,
    rgba(240, 46, 170, 0.2) 9px 9px, rgba(240, 46, 170, 0.1) 12px 12px,
    rgba(240, 46, 170, 0.05) 15px 15px;
  div {
    img {
      width: 100%;
    }
  }
`;
