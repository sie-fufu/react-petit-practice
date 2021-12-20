import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { memo, useState, VFC } from "react";
import { LoginButton } from "components/atoms/button/LoginButton";
import classes from "pages/Login/index.module.scss";
import { InputField } from "components/atoms/InputField";
import { useAuth } from "hooks/useAuth";

export const Login: VFC = memo((props) => {
  const [password, setPassword] = useState("");
  const { login, loading } = useAuth();

  const onChangePassword = (v: string) => setPassword(v);

  const onClickLogin = () => login(password);
  return (
    <Flex
      className={classes.container}
      align="center"
      justify="center"
      height="100vh"
    >
      <Box bg="white" w="sm" borderRadius={10} p={20} shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          LOGIN
        </Heading>
        <Divider />
        <Stack>
          <InputField
            label="パスワード"
            value={password}
            onChange={onChangePassword}
          />
          <LoginButton
            disabled={password === ""}
            className={classes.logButton}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </LoginButton>
        </Stack>
      </Box>
    </Flex>
  );
});
