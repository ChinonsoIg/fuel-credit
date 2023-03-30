import styles from "../assets/styles/Button.module.css"

const Button = ({ title, variant, height, isBtnLoading }) => {
  return (
    <button
      className={`${styles.btn} ${variant === "transparent" ? styles.btn_transparent : styles.btn_solid}`}
      style={{ 
        height, 
        opacity: isBtnLoading ? "0.5" : "1" 
      }}
      >
      {title}
    </button>
  )
}

export default Button;