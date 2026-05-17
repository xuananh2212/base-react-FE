import { api } from "../../../shared/api/axios";
import type { LoginPayload, LoginResponse } from "../type";

export const loginApi = async (
  payload: LoginPayload,
): Promise<LoginResponse> => {
  const response = await api.post("/login", payload);

  return response.data;
};
