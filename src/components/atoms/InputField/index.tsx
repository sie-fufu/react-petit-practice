import { Input } from "@chakra-ui/input";
import { ChangeEvent } from "react";
import classes from "./index.module.scss";

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

export const InputField = (props: InputFieldProps): JSX.Element => {
  const { label, value, onChange } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Input
      className={classes.input}
      placeholder={label}
      value={value}
      onChange={handleChange}
    />
  );
};
