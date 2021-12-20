import axios from "axios";
import { BASE_URL } from "libs/baseUrl";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [adminPassword, setAdminPassword] = useState<string>("");
  const [authPassword, setAuthPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // const handleConfirmPassword = useCallback(
  //   (password: string) => {
  //     if (adminPassword === password) {
  //       // 管理者ページ遷移
  //       showMessage({ title: "ログインしました。", status: "success" });
  //       history.push("/Management");
  //     } else if (authPassword === password) {
  //       // メインページに移動
  //       showMessage({ title: "ログインしました。", status: "success" });
  //       history.push("/Main");
  //     } else {
  //       // 認証失敗
  //       showMessage({ title: "半角英数字で入力して下さい", status: "error" });
  //       setLoading(false);
  //     }
  //   },
  //   [adminPassword, authPassword, history, showMessage]
  // );

  const login = useCallback(
    (password: string) => {
      setLoading(true);

      axios
        .get(BASE_URL + "/password")
        .then((res) => {
          // APIから値を取得
          const data = res.data[0];

          // 取得した値を状態で管理
          setAdminPassword(data.adminPassword);
          setAuthPassword(data.authPassword);

          if (adminPassword === password) {
            // 管理者ページ遷移
            showMessage({ title: "ログインしました。", status: "success" });
            history.push("/Management");
          } else if (authPassword === password) {
            // メインページに移動
            showMessage({ title: "ログインしました。", status: "success" });
            history.push("/Main");
          } else {
            // 認証失敗
            showMessage({
              title: "半角英数字で入力して下さい",
              status: "error",
            });
          }
        })
        .catch(() => {
          showMessage({ title: "半角英数字で入力して下さい", status: "error" });
          setLoading(false);
        });
    },
    [adminPassword, authPassword, history, showMessage]
  );
  return { login, loading };
};
