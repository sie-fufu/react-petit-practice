import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { memo, useState, VFC } from "react";
import { LoginButton } from "components/atoms/button/LoginButton";
import classes from "pages/Login/index.module.scss";
import { InputField } from "components/atoms/InputField";

export const Login: VFC = memo((props) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangePassword = (v: string) => setPassword(v);

  const onClickLogin = () => Login(123);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box w="sm" p={4} shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          Login
        </Heading>
        <Divider />
        <Stack>
          {/* <Input
            className={classes.input}
            placeholder="パスワード"
            value="123"
            onChange={onChangePassward}
          /> */}
          <InputField
            label="パスワード"
            value={password}
            onChange={onChangePassword}
          />
          <LoginButton
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
