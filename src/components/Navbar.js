import React from 'react'
import styles from './../assets/styles/Navbar.module.css';
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt='Logo' />
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
            <Button title="Log In" variant="transparent" />
            <Button title="Create free account" variant="solid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar