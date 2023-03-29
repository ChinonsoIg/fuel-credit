import React from 'react'
import Navbar from '../Navbar';
import Sidebar from './Sidebar';
import styles from "../../assets/styles/Layout.module.css";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.contents}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default AuthLayout;