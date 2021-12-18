import { Box, VStack } from "@chakra-ui/react";
import { CancelButton } from "components/atoms/button/CancelButton";
import { DecisiveButton } from "components/atoms/button/DecisiveButton";
import classes from "pages/Decide/index.module.scss";
import { Link } from "react-router-dom";

export const Decide = () => {
  return (
    <>
      <Box>
        <br />
        <Link to="/management" className={classes.link}>
          管理者画面へ
        </Link>
      </Box>
      <Box>
        <br />
        <Link to="/changePass" className={classes.link}>
          パス画面へ
        </Link>
      </Box>
      <h1 className={classes.decideTitle}>決定画面</h1>
      <Box className={classes.decideBtn}>
        <VStack spacing="4">
          <Box>
            <DecisiveButton />
          </Box>
          <Box>
            <CancelButton />
          </Box>
        </VStack>
      </Box>
      <Link to="/main" className={classes.decideHome}>
        ホーム
      </Link>
    </>
  );
};
