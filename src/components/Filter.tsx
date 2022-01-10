import * as React from "react";
import { Select } from "./Select";
import { FILTERS } from "../consts/filters";

export interface IFilters {
  gender: string;
  specie: string;
  type: string;
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

  return (
    <div>
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
    </div>
  );
}
