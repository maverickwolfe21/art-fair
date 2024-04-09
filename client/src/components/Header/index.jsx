import { Link } from "react-router-dom";
import { useApp } from "../../utils/app-context";


const style = "hover:underline underline-offset-2";

const Header = () => {
  const {logout, loggedIn} = useApp()
  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };
  return (
    <header className="w-screen flex justify-center mb-8">
      <div className="flex w-4/5 justify-between p-5 items-center border-2 border-black bg-transparent text-black">
        <div>
          <Link className="text-xl" to="/">
            Art Fair
          </Link>
        </div>
        <div className="flex gap-5">
          {loggedIn() ? (
            <>
              <Link className={style} to="/shop">
                Shop
              </Link>
              <Link className={style} to="/artists">
                Artists
              </Link>
              <Link className={style} to="/about">
                About the Fair
              </Link>
              <Link className={style} to="/favorites">
                Favorites
              </Link>
              <button className="text-red-600" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className={style} to="/shop">
                Shop
              </Link>
              <Link className={style} to="/artists">
                Artists
              </Link>
              <Link className={style} to="/about">
                About the Fair
              </Link>
              <Link className={style} to="/login">
                Login
              </Link>
              <Link className={style} to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
