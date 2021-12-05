import { memo } from "react";
import classes from "../../components/styles/FloatButton.module.scss";

export const LoginButton = memo(() => {
  return (
    <button className={classes.logButton}>パスワードを入力してアクセス</button>
  );
});
