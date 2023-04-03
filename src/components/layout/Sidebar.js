import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "../../assets/styles/Sidebar.module.css";
import logo from "../../assets/images/logo.png";
import customer_support from "../../assets/images/customer_support.png";
import { navItems } from "../../utils/arrayItems";
import { AiOutlineBars } from "react-icons/ai";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const location = useLocation();
  const pathName = location.pathname;

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  }


  return (
    <div className={styles.sidebar_container}>
      <div className={styles.logo_container}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.sidebar_desktop}>
        <nav className={styles.nav_items}>
          <ul>
            {navItems.map((navItem) => {
              const { id, title, image, routeMatcher } = navItem;

              return (
                <li key={id}>
                  <Link to={routeMatcher} className={`${styles.link} ${pathName === routeMatcher ? styles.active : styles.inactive}`}>
                    <img src={image} alt={title} />
                    <span>{title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.horizontal_line}></div>
        <nav className={styles.customer_support_nav_items}>
          <Link to="/customer_support" className={`${styles.customer_support_link} ${pathName === "/customer_support" ? styles.active : styles.inactive}`}>
            <img src={customer_support} alt="Customer support icon" />
            <span>Customer Support</span>
          </Link>
        </nav>
      </div>

      <div 
        className={styles.sidebar_toggle_container} 
        onClick={handleSidebar}
      >
        <AiOutlineBars size={20} />
      </div>
      {
        showSidebar && (
          <div className={styles.sidebar_mobile}>
            <nav className={styles.nav_items}>
              <ul>
                {navItems.map((navItem) => {
                  const { id, title, image, routeMatcher } = navItem;

                  return (
                    <li key={id}>
                      <Link to={routeMatcher} className={`${styles.link} ${pathName === routeMatcher ? styles.active : styles.inactive}`}>
                        <img src={image} alt={title} />
                        <span>{title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className={styles.horizontal_line}></div>
            <nav className={styles.customer_support_nav_items}>
              <Link to="/customer_support" className={`${styles.customer_support_link} ${pathName === "/customer_support" ? styles.active : styles.inactive}`}>
                <img src={customer_support} alt="Customer support icon" />
                <span>Customer Support</span>
              </Link>
            </nav>
          </div>
        )
      }
    </div>
  )
}

export default Sidebar;