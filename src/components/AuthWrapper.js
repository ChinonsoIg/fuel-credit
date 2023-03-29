import "../index.css";

const AuthWrapper = ({ children }) => {
  return (
    <div className="auth_body">
      <div className="auth_wrapper">
        {children}
      </div>
    </div>
  );
}

export default AuthWrapper;