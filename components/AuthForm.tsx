import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import Link from "next/link";

const AuthForm = ({ type }: { type: "register" | "login" }) => {
  return (
    <div className="auth">
      <div className="overlay">
        <div className="content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
            className="logo"
          />

          <form className="form">
            {type === "register" && (
              <div className="input">
                <input
                  type="text"
                  placeholder="Username"
                  className="input-field"
                />
                <PersonOutline sx={{ color: "white" }} />
              </div>
            )}
            <div className="input">
              <input type="email" placeholder="Email" className="input-field" />
              <EmailOutlined sx={{ color: "white" }} />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <LockOutlined sx={{ color: "white" }} />
            </div>

            <button className="button">
              {type === "register" ? "Join Free" : "Let's Watch"}
            </button>
          </form>

          {type === "register" ? (
            <Link href="/register">
              <p className="link">Already have an account? Log In Here</p>
            </Link>
          ) : (
            <Link href="/register">
              <p className="link">Don't have an account? Register Here</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
