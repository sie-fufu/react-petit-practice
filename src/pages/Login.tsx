import { ChangeEvent, memo, useState, VFC } from "react";
import { InputButton } from "../atoms/button/InputButton";

export const Login: VFC = memo(() => {
  const [UserInpt, setUserInput] = useState("");
  const { login, loading } = InputButton;

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserInput(e.target.value);
  return (
    <>
      <p>LOGIN</p>
      <InputButton
        onChange={onChangeUserId}
        loading={loading}
        placeHolder={"パスワードを入力してアクセス"}
      />
    </>
  );
});
