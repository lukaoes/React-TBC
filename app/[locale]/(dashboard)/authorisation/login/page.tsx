import Link from "next/link";

const Login = () => {
  return (
    <div className="auth-right-layout">
      <div className="auth-box">
        <div className="auth-info">
          <h1>Welcome Back</h1>
          <p>Welcome! Please login to your account.</p>
        </div>
        <form>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="auth-input top"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="auth-input"
          />
          <div className="remember-me">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <div className="auth-buttons">
            <button className="auth-submit" type="submit">
              SIGN IN
            </button>
            <Link href="/auth/register">REGISTER</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
