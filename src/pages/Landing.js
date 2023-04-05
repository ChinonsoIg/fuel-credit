import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser} from "../features/auth/authSlice";
import Navbar from "../components/Navbar";

const Landing = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    if(user) {
      navigate("/home")
    }
  }, [user])


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