import { Helmet } from "react-helmet-async";
import { LoginForm } from "../features/auth";

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
