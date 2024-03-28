"use client";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface FormData {
  username?: string; //make it optional
  email: string;
  password: string;
}

const AuthForm = ({ type }: { type: "register" | "login" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:
      type === "register"
        ? { username: "", email: "", password: "" }
        : { email: "", password: "" },
  });

  const onSubmitHandler = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="auth">
      <div className="overlay">
        <div className="content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
            className="logo"
          />

          <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
            {type === "register" && (
              <>
                <div className="input">
                  <input
                    {...register("username", {
                      required: "Username is required",
                      validate: (value: string | undefined) => {
                        if (!value || value.length < 2) {
                          return "Username must be atleast 2 characters long";
                        }
                      },
                    })}
                    type="text"
                    placeholder="Username"
                    className="input-field"
                  />
                  <PersonOutline sx={{ color: "white" }} />
                </div>
                {errors.username && (
                  <p className="error"> {errors.username.message}</p>
                )}
              </>
            )}

            <div className="input">
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <EmailOutlined sx={{ color: "white" }} />
            </div>
            {errors.email && <p className="error"> {errors.email.message}</p>}

            <div className="input">
              <input
                {...register("password", {
                  required: "Password is required",
                  validate: (value: string | undefined) => {
                    if (
                      !value ||
                      value.length < 5 ||
                      value.length > 10 ||
                      !value.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/)
                    ) {
                      return "Password must be between 5 and 10 characters long and contain at least one special character";
                    }
                  },
                })}
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <LockOutlined sx={{ color: "white" }} />
            </div>
            {errors.password && (
              <p className="error"> {errors.password.message}</p>
            )}

            <button className="button" type="submit">
              {type === "register" ? "Join Free" : "Let's Watch"}
            </button>
          </form>

          {type === "register" ? (
            <Link href="/login">
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
