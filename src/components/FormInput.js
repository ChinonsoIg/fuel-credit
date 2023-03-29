import styles from "../assets/styles/FormInput.module.css";

const FormInput = ({ htmlFor, title, type, name, placeholder, register, errors }) => {
  return (
    <div className={styles.input_wrapper}>
      <label htmlFor={htmlFor} className={styles.form_label}>
        {title}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          {...register}
          className={styles.input}
        />
      </label>
      <span className={styles.form_errors}>{errors}</span>
    </div>
  )
}

export default FormInput;