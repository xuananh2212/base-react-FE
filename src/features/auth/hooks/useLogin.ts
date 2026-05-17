import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../services/auth.api";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginApi,
  });
};
