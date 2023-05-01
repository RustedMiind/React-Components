import { useState } from "react";
import "./navbar.css";

function Navbar(props: PropsType) {
  const [dropdown, setDropdown] = useState<"user" | "menu" | "">("");
  function handleUserDropdown() {
    if (dropdown === "user") setDropdown("");
    else {
      setDropdown("user");
    }
  }
  function handleMenuDropdown() {
    if (dropdown === "menu") setDropdown("");
    else {
      setDropdown("menu");
    }
  }
  return (
    <nav
      className={`my-navbar ${props.className && props.className}`}
      style={props.style}
      onMouseLeave={() => {
        setDropdown("");
      }}
    >
      <div className="logo">
        {props.logo.type === "text" && <h2>{props.logo.payload}</h2>}
        {props.logo.type === "image" && (
          <img src={props.logo.payload} alt="Logo" />
        )}
      </div>
      <div className="right-container">
        <div className="links-container">
          <div
            className={`links ${dropdown === "menu" ? "" : "mobile-hidden"}`}
          >
            {props.navLinks}
          </div>
        </div>
        {props.isUser ? (
          <div className="user">
            <div className="image" onClick={handleUserDropdown}>
              <img
                src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                alt="User"
              />
            </div>
            <div className={`dropdown ${dropdown === "user" ? "active" : ""}`}>
              {props.userDropdown}
            </div>
          </div>
        ) : (
          <div className="login">
            <button
              onClick={
                props.loginCallback
                  ? props.loginCallback
                  : () => {
                      console.warn(
                        "You should Add callback that manage the isUser value"
                      );
                    }
              }
            >
              Login
            </button>
          </div>
        )}
        <div className="menu" onClick={handleMenuDropdown}>
          <div className="image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

type PropsType = {
  isUser: boolean;
  loginCallback?: () => void;
  navLinks: JSX.Element;
  logo: {
    type: "image" | "text";
    payload: string;
  };
  className?: string;
  style?: React.CSSProperties;
  userDropdown: JSX.Element;
};

export default Navbar;
