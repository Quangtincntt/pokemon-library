import { UserAuth } from "../../../../Context/AuthenContext";

import "./Header.css";
function Header() {
  const { user, logOut } = UserAuth();
  const { photoURL } = user;
  return (
    <header className="header">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBDuy7W9e-c5Sz8xBV2ERBy2X0aeis1xPzQ&usqp=CAU"
        alt=""
      />
      <p className="user"> Hi {user?.displayName} !!</p>
      <div className="action">
        <img className="avatar" src={photoURL} alt="" />
        <button className="btn-logout" onClick={logOut}>
          Sign Out
        </button>
      </div>
    </header>
  );
}

export default Header;
