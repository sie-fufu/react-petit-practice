import { memo } from "react";
import classes from "./index.module.scss";

export const FloatButton = memo(() => {
  return <button className={classes.floatButton}>詳細</button>;
});
