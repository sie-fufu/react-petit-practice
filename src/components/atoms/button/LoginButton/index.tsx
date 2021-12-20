import { Button } from "@chakra-ui/button";
import { memo, ReactNode, VFC } from "react";
import classes from "components/atoms/button/LoginButton/index.module.scss";

type Props = {
  children: ReactNode;
  loading?: boolean;
  onClick: () => void;
  className: string;
  disabled?: boolean;
};

export const LoginButton: VFC<Props> = memo((props) => {
  const {
    children,
    loading = false,
    onClick,
    // className,
    disabled = false,
  } = props;

  return (
    <Button
      className={classes.logButton}
      isLoading={loading}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {children}
    </Button>
  );
});
