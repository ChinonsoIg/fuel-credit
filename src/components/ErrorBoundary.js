import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  // let error = useRouteError();
  // console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang! An error occured!!</div>;
}

export default ErrorBoundary;