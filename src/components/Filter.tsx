import * as React from "react";
import { Select } from "./Select";
import { FILTERS } from "../consts/filters";
import { SearchForm } from "./SearchForm";
import { Container } from "../styles/FilterStyle";

export interface IFilters {
  search: string;
  gender: string;
  status: string;
}

interface iFilterProps {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export function Filter(props: iFilterProps) {
  const { filters, setFilters } = props;

  const onChange = (event: any) => {
    const { name, value } = event.target;

    setFilters({ ...filters, [name]: value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    const { value, name } = event.target.search;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Container>
      <SearchForm onSubmit={onSubmit} onChange={onChange} />
      <Select
        onChange={onChange}
        name={FILTERS.genders.name}
        values={FILTERS.genders.values}
      />
      <Select
        onChange={onChange}
        name={FILTERS.status.name}
        values={FILTERS.status.values}
      />
    </Container>
  );
}
