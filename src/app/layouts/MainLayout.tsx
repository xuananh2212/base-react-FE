import { Outlet, Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
};
