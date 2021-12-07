import { ChangeEvent, memo, useState, VFC } from "react";
import { InputField } from "../atoms/button/InputField";

export const Login: VFC = memo(() => {
  const [userInput, setUserInput] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserInput(e.target.value);
  return (
    <>
      <p>LOGIN</p>
      <InputField
        onChange={onChangeUserId}
        placeholder={"パスワードを入力してアクセス"}
      />
    </>
  );
});
