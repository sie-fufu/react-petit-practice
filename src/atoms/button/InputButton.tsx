import { Input } from "@chakra-ui/input";
import { memo, VFC } from "react";
import classes from "../../components/styles/FloatButton.module.scss";

type Props = {
  disabled?: boolean;
  loading?: boolean;
  onChange: () => void;
};

export const InputButton: VFC<Props> = memo((props) => {
  const { disabled = false, loading = false, onChange } = props;

  return (
    <Input
      className={classes.logButton}
      disabled={disabled || loading}
      onChange={onChange}
    />
  );
});
