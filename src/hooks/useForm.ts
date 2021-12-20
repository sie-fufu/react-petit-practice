import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useForm = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
};
