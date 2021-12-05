import { memo } from "react";
import classes from "../../components/styles/FloatButton.module.scss";

export const DecisiveButton = memo(() => {
  return <button className={classes.decisiveBtn}>決行する</button>;
});
