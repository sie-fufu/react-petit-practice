import { memo } from "react";
import classes from "../../components/styles/FloatButton.module.scss";

export const FloatButton = memo(() => {
  return <button className={classes.floatButton}>詳細</button>;
});
