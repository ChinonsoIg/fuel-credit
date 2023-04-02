import styles from "../assets/styles/Button.module.css"

const Button = ({ title, variant, isBtnLoading }) => {
  return (
    <button
      className={`${styles.btn} ${variant === "transparent" ? styles.btn_transparent : styles.btn_solid}`}
      style={{ 
        opacity: isBtnLoading ? "0.5" : "1" 
      }}
      >
      {title}
    </button>
  )
}

const LinkButton = ({ title, variant }) => {
  return (
    <button
      className={`${styles.btn_link} ${variant === "transparent" ? styles.btn_link_transparent : styles.btn_link_solid}`}
      >
      {title}
    </button>
  )
}

export { Button, LinkButton };