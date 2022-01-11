import { Search, SearchButton, SearchFilter } from "../styles/FilterStyle";

import { BiSearchAlt2 } from "react-icons/bi";

export interface ISearchFormProps {
  onSubmit: (event: any) => void;
  onChange: (event: any) => void;
}

export function SearchForm(props: ISearchFormProps) {
  return (
    <div>
      <SearchFilter name="name" onSubmit={props.onSubmit}>
        <Search name="search" placeholder="Search characters..." />
        <SearchButton type="submit">
          <BiSearchAlt2 />
        </SearchButton>
      </SearchFilter>
    </div>
  );
}
