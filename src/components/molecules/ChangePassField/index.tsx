import { InputFieldProps } from "types/InputField";
import { InputField } from "components/atoms/InputField";

export const ChangePassField = (props: InputFieldProps): JSX.Element => {
  const handleChange = (v: string) => {
    console.log(v);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert("送信されました");
  };

  return (
    <>
      <InputField label="パスワード" value={""} onChange={handleChange} />
      <button onClick={onClick}>パス変更</button>
    </>
  );
};
