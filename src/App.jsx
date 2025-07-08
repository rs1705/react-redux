import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
function App() {
  const loggedIn = useSelector((state) => state.auth.isAuth);
  return (
    <>
      <Header />
      {loggedIn ? (
        <>
          <UserProfile /> <Counter />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
