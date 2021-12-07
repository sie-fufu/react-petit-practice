import { Input } from "@chakra-ui/input";
import { ChangeEvent, memo, VFC } from "react";
import classes from "../../components/styles/FloatButton.module.scss";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const InputField: VFC<Props> = memo((props) => {
  const { onChange, placeholder } = props;

  return (
    <Input
      className={classes.logButton}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});
