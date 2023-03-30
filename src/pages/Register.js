import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import "../index.css";
import styles from "../assets/styles/Auth.module.css";
import person from "../assets/images/person.png";

import AuthWrapper from "../components/AuthWrapper";
import Navbar from "../components/Navbar";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  mobileNumber: yup.string()
    .required("Phone number is required")
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits"),
  nin: yup.string().notRequired(),
  email: yup.string().email().required("Password is required"),
  password: yup.string().required("Password is required")
}).required();


const Register = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const onSubmit = async (data) => {
    console.log(data)

    navigate("/login", { state: { from: location } });

    // try {
    //   const response = await fetch("http://dev.myfuelcredit.com/api/v1/register", data);
    //   const data = await response.json();
    //   navigate("/login");

    //   return data;

    // } catch (err) {
    //   console.log("err: ", err)
    //   if (!err?.originalStatus) {
    //     setErrMsg("No Server Response");
    //   } else if (err.originalStatus === 400) {
    //     setErrMsg("Missing User ID or Password");
    //   } else if (err.originalStatus === 401) {
    //     setErrMsg("Unauthorized");
    //   } else {
    //     setErrMsg("Login Failed");
    //   }
    // }

  }




  useEffect(() => {
    setErrMsg("")
  }, [])

  return (
    <div>
      <Navbar />
      <AuthWrapper>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.auth_container}>
          <div className={styles.form_icon_and_title}>
            <img src={person} alt="person icon" />
            <span className={styles.form_title}>Individual/Family</span>
          </div>
          <p className={styles.not_an_individual}>Not an Individual? <span className="text_primary_color">Choose another account type</span></p>
          <div className={styles.form_input_container}>
            <FormInput
              htmlFor="firstName"
              title="First Name"
              type="text"
              name="firstName"
              placeholder="Enter first name"
              register={register("firstName")}
              errors={errors.firstName?.message}
            />
            <FormInput
              htmlFor="lastName"
              title="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter last name"
              register={register("lastName")}
              errors={errors.lastName?.message}
            />
            <FormInput
              htmlFor="mobileNumber"
              title="Phone Number"
              type="text"
              name="mobileNumber"
              placeholder="Enter 11-digit phone number"
              register={register("mobileNumber")}
              errors={errors.mobileNumber?.message}
            />
            <FormInput
              htmlFor="nin"
              title="NIN (National Identification Number)"
              type="number"
              name="nin"
              placeholder="Enter NIN"
              register={register("nin")}
              errors={errors.nin?.message}
            />
            <FormInput
              htmlFor="email"
              title="Email"
              type="email"
              name="email"
              placeholder="Enter email"
              register={register("email")}
              errors={errors.email?.message}
            />
            <div className={styles.password_container}>
              <div className="">
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
          <p className={styles.terms_and_policy}>
            By creating an account you agree to our
            <span className="text_primary_color">{" "}Terms of Use</span>{" "} and {" "}
            <span className="text_primary_color">Privacy Policy</span>.
          </p>
          <Button title="Create my account" variant="solid" height="55px" />
        </form>
      </AuthWrapper>
    </div>
  )
}

export default Register;