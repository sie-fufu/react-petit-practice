import { Box } from "@chakra-ui/react";
import { FloatButton } from "components/atoms/button/FloatButton";
import classes from "./index.module.scss";

export const Main = () => {
  return (
    <>
      <Box className={classes.detail}>
        <Box className={classes.button}>
          <FloatButton />
        </Box>
      </Box>
    </>
  );
};
