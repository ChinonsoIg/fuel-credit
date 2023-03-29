import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import AuthWrapper from '../components/AuthWrapper';
import Navbar from '../components/Navbar';
import "../index.css";
import styles from "../assets/styles/Register.module.css";
import person from "../assets/images/person.png";
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const schema = yup.object({
  mobileNumber: yup.string()
    .required("Phone number is required")
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits"),
  password: yup.string().required("Password is required")
}).required();


const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const onSubmit = (data) => {
    console.log("data: ", data)
  }


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
              htmlFor="mobileNumber"
              title="Phone Number"
              type="text"
              name="mobileNumber"
              placeholder="Enter 11-digit phone number"
              register={register("mobileNumber")}
              errors={errors.mobileNumber?.message}
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
          {/* <input
              type="submit"
              // role="button"
              className="{!isBtnLoading ? styles.login_btn : styles.login_btn_loading}"
              value={!isBtnLoading ? "Sign in" : "Signing in..."}
            /> */}
          <Button title="Create my account" variant="solid" />
        </form>
      </AuthWrapper>
    </div>
  )
}

export default Login;