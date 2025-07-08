import classes from "./Header.module.css";
import { logOut } from "../store/Auth";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.isAuth);

  const onHandlelogOut = () => {
    dispatch(logOut());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loggedIn && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onHandlelogOut}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
