import { memo } from "react";
import classes from "../../components/styles/FloatButton.module.scss";

export const CancelButton = memo(() => {
  return <button className={classes.cancelBtn}>中止する</button>;
});
