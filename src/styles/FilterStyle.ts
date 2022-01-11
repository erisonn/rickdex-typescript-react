import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  div {
    margin-right: 0.4rem;
    input {
      outline: none;
    }
  }
`;

export const SearchFilter = styled.form`
  position: relative;
`;

export const Search = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #fff;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: transparent;
  border: none;
  right: 0;
  top: 25%;
  cursor: pointer;
  margin-right: 5px;
`;

export const SelectContainer = styled.select`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: #fff;
`;
