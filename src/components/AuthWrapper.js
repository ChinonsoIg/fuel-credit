import { Link } from "react-router-dom";
import "../index.css";
import close_icon from "./../assets/images/close_icon.png";

const AuthWrapper = ({ children }) => {
  return (
    <div className="auth_body">
      <div className="auth_wrapper">
        <div className="auth_main">
          <Link to="/" className="close_form">
            <img src={close_icon} alt="close form" />
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;