import Link from "next/link";

const Register = () => {
  return (
    <div className="auth-right-layout">
      <div className="auth-box">
        <div className="auth-info">
          <h1>Register Now</h1>
          <p>Welcome! Please register your account.</p>
        </div>
        <form>
          <label htmlFor="Name">Name</label>
          <input
            type="Name"
            name="Name"
            id="Name"
            placeholder="Name"
            className="auth-input top"
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="surname"
            name="surname"
            id="surname"
            placeholder="Surname"
            className="auth-input top"
          />
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
              REGISTER
            </button>
            <Link href="/auth/register">SIGN IN</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
