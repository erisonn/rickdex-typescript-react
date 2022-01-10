export interface ISelectProps {
  name: string;
  values: string[];
  onChange: (event: any) => void;
}

export function Select(props: ISelectProps) {
  const { name, values, onChange } = props;

  return (
    <div>
      <select name={name} onChange={onChange}>
        <option value="">All</option>
        {values?.map((value) => (
          <option>{value}</option>
        ))}
      </select>
    </div>
  );
}
