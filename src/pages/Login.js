import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/auth/authApiSlice";

import AuthWrapper from "../components/AuthWrapper";
import Navbar from "../components/Navbar";
import "../index.css";
import styles from "../assets/styles/Auth.module.css";
import verification_successful from "../assets/images/verification_successful.png";
import login_logo from "../assets/images/login_logo.png";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const schema = yup.object({
  mobileNumber: yup.string()
    .required("Phone number is required")
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits"),
  password: yup.string().required("Password is required")
}).required();

const LoginPage = () => {
  const errRef = useRef()
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname;


  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }


  const onSubmit = async (data) => {
    const { mobileNumber, password } = data;
    
    try {
      const userData = await login({ mobileNumber, password }).unwrap()
      dispatch(setCredentials({ ...userData, mobileNumber }))

      navigate("/home")
    } catch (err) {
      console.log("err: ", err);
      if (!err?.originalStatus) {
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing User ID or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }

  }


  useEffect(() => {
    setErrMsg("")
  }, [])

  return (
    <div>
      <Navbar />
      <AuthWrapper>
      <p ref={errRef} style={{ color: "red" }} aria-live="assertive">{errMsg}</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.auth_container}>
          <div className={styles.login_form_icon_and_title}>
            {fromLocation === "/register" && <>
              <img src={verification_successful} alt="verification icon" />
              <span className={styles.form_title}>
                Verification successful!
              </span>
            </>
            }
            {fromLocation !== "/register" && <>
              <img src={login_logo} alt="login icon" />
              <span className={styles.form_title}>
                Log in
              </span>
            </>
            }
          </div>
          {fromLocation && <p className={styles.registration_complete}>
            Your registration is complete. Log in below to start enjoying easier and faster fuel purchases.
          </p>}
          {fromLocation && <p className={styles.login_post_registration}>Log in</p>}
          <div className={styles.login_form_input_container}>
            <FormInput
              htmlFor="mobileNumber"
              title="Phone Number (User ID)"
              type="text"
              name="mobileNumber"
              placeholder="Enter 11-digit phone number"
              register={register("mobileNumber")}
              errors={errors.mobileNumber?.message}
            />
            <div className={styles.password_container}>
              <div>
                <span
                  style={{
                    color: "#4FB518",
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                  }}
                >
                  Forgot password?
                </span>
                <FormInput
                  htmlFor="password"
                  title="Password"
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  register={register("password")}
                  errors={errors.password?.message}
                />
                <span
                  className={styles.password_toggler}
                  onClick={handleTogglePassword}
                >
                  {isPasswordVisible ?
                    <AiFillEyeInvisible size={18} color="#CCD2E3" /> :
                    <AiFillEye size={18} color="#CCD2E3" />
                  }
                </span>
              </div>
            </div>
          </div>
          <Button title="Log in" variant="solid" height="55px" />
          {fromLocation === "/register" && <p className={styles.forgot_password_post_registration}>Forgot password?</p>}
          {fromLocation !== "/register" && <p className={styles.if_new_user}>New user? <span className="text_primary_color">Create account</span></p>}
        </form>
      </AuthWrapper>
    </div>
  )
}

export default LoginPage;