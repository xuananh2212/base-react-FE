import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const LoginForm = () => {
  const { mutate, isPending } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    mutate({
      email,
      password,
    });
  };

  return (
    <div>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={onSubmit}>{isPending ? "Loading..." : "Login"}</button>
    </div>
  );
};
