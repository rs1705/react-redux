import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../store/Auth";
import { useRef } from "react";

const Auth = () => {
  const username = useRef();
  const pass = useRef();
  const dispatch = useDispatch();

  const handleLogIn = (e) => {
    e.preventDefault();
    if (
      username.current.value == "admin@me.com" &&
      pass.current.value == "admin"
    ) {
      dispatch(logIn());
    } else {
      alert("Incorrect username and password!");
      return;
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogIn}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={username} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={pass} type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
