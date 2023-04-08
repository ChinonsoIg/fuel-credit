import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoading, selectCurrentUser } from "../features/auth/authSlice";
import Navbar from "../components/Navbar";

const Landing = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const loading = useSelector(isLoading);

  useEffect(() => {
    if (user) {
      navigate("/home")
    }
  }, [user])


  // if (loading) return null;

  return (
    <div>
      <Navbar />
      <div style={{ padding: "0 50px" }}>
        <h1>FuelCredit Landing Page</h1>
      </div>
    </div>
  )


}

export default Landing;