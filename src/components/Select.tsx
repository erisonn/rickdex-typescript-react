import { SelectContainer } from "../styles/FilterStyle";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

export interface ISelectProps {
  name: string;
  values: string[];
  onChange: (event: any) => void;
}

export function Select(props: ISelectProps) {
  const { name, values, onChange } = props;

  return (
    <div>
      <label>{capitalizeFirstLetter(name)}: </label>
      <SelectContainer name={name} onChange={onChange}>
        <option value="">All</option>
        {values?.map((value) => (
          <option>{value}</option>
        ))}
      </SelectContainer>
    </div>
  );
}

//adicionar keys
