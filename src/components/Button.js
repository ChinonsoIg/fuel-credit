import styles from "../assets/styles/Button.module.css"

const Button = ({ title, variant }) => {
  return (
    <button className={`${styles.btn} ${variant === "transparent" ? styles.btn_transparent : styles.btn_solid}`}>
      {title}
    </button>
  )
}

export default Button;