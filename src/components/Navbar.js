import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logOut, selectCurrentUser } from "../features/auth/authSlice";
import { AiOutlineBars } from "react-icons/ai";

import styles from "./../assets/styles/Navbar.module.css";
import logo from "../assets/images/logo.png";
import bell from "../assets/images/bell.png";
import file from "../assets/images/file.png";
import down_stroke from "../assets/images/down_stroke.png";
import person_transparent from "../assets/images/person_transparent.png";
import { Button, LinkButton } from "./Button";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  const handleLogOut = () => {
    dispatch(logOut());
  }

  if (user) {
    return (
      <div className={styles.navbar_authed_user}>
        <p className={styles.authed_user_title}>Home</p>
        <div className={styles.flex_container_authed_user}>
          <img src={file} alt="File icon" />
          <img src={bell} alt="Bell icon" />
          <div
            onClick={handleDropdown}
            className={styles.authed_dropdown}
          >
            <img src={person_transparent} alt="Profile icon" />
            <img src={down_stroke} alt="Down stroke icon" className={styles.dropdown_icon} />
            {
              showDropdown && (
                <div className={styles.dropdown_container}>
                  <Button title="Logout" variant="solid" height="45px" />
                </div>
              )
            }
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

      {/* For mobile view */}
      <div className={styles.toggle_bars} onClick={handleNavbar}>
        <AiOutlineBars size={20} color="#31581C" />
      </div>
      {
        showNavbar && (
          <div className={styles.navbar_grid_container_mobile}>
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
            <Link to="/login">
              <LinkButton title="Log In" variant="transparent" />
            </Link>
            <Link to="/register">
              <LinkButton title="Create free account" variant="solid" />
            </Link>

          </div>
        )
      }

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
            <Link to="/login"><LinkButton title="Log In" variant="transparent" /></Link>
            <Link to="/register"><LinkButton title="Create free account" variant="solid" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar