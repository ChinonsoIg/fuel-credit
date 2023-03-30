import { useSelector } from "react-redux"
import { selectCurrentUser } from "../features/auth/authSlice"

import styles from "./../assets/styles/Navbar.module.css";
import logo from "../assets/images/logo.png";
import bell from "../assets/images/bell.png";
import file from "../assets/images/file.png";
import down_stroke from "../assets/images/down_stroke.png";
import person_transparent from "../assets/images/person_transparent.png";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  // const user = useSelector(selectCurrentUser);
  const user = "null"


  if (user) {
    return (
      <div className={styles.navbar_authed_user}>
        <p className={styles.authed_user_title}>Home</p>
        <div className={styles.flex_container_authed_user}>
          <img src={file} alt="File icon" />
          <img src={bell} alt="Bell icon" />
          <div>
            <img src={person_transparent} alt="Profile icon" />
            <img src={down_stroke} alt="Down stroke icon" />
          </div>
        </div>
      </div>
    )
  };


  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt="Logo" />
      </NavLink>
      <div className={styles.navbar_grid_container}>
        <div className={styles.navbar_grid_left}>
          <NavLink
            to="/#individuals-corporates"
            className={({ isActive }) => `
              ${isActive} ? ${styles.navbar_active} : ${styles.navbar_link}`
            }
          >
            Individuals/Corporates
          </NavLink>
          <NavLink
            to="/#merchants"
            className={({ isActive }) => `
            ${isActive} ? ${styles.navbar_active} : ${styles.navbar_link}`
            }
          >
            Merchants
          </NavLink>
        </div>
        <div className={styles.navbar_grid_right}>
          <NavLink
            to="/#about-us"
            className={({ isActive }) => `
            ${isActive} ? ${styles.navbar_active} : ${styles.navbar_link}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/#faqs"
            className={({ isActive }) => `
            ${isActive} ? ${styles.navbar_active} : ${styles.navbar_link}`
            }
          >
            FAQs
          </NavLink>
          <div className={styles.auth_btn_container}>
            <Link to="/login"><Button title="Log In" variant="transparent" height="45px" /></Link>
            <Link to="/register"><Button title="Create free account" variant="solid" height="45px" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar