import axios from "axios";
import { ChangePassField } from "components/molecules/ChangePassField";
import { BASE_URL } from "libs/baseUrl";
import { useEffect, useState } from "react";

export const ChangePass = () => {
  // パスワード更新時に使うpasswordId
  const [passwordId, setPasswordId] = useState<string>("");

  const handleChange = (v: string) => {
    console.log(v);
  };

  // パスワード更新時にputリクエスト
  const handleSbmitPassword = () => {
    axios.put(BASE_URL + `/password/${passwordId}`, {});
  };

  useEffect(() => {
    // passwordId用にgetしておき、その後にstateにセット。
    axios
      .get(BASE_URL + "/password")
      .then((res) => setPasswordId(res.data[0].passwordId))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ChangePassField label="パスワード" value={""} onChange={handleChange} />
    </>
  );
};
