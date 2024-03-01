import { FC } from 'react'
import styles from './FormInput.module.css'
import visibilityIcon from '../../assets/icons/visibility.svg'


interface IFormInput {
    label: string,
    id: string,
    type: string,
    placeholder: string,
    name: string,
    value: string,
    handleInputChange: any
}

const FormInput: FC<IFormInput> = (props) => {

    const togglePassword = () => {
        const node = document.querySelector('#password_element')
        if (!node) return

        if (node.getAttribute('type') === 'password') {
            node.setAttribute('type', 'text')
        } else {
            node.setAttribute('type', 'password')
        }
    }

    return (
        <>
            <div className={styles.input_container}>
                <label className={styles.form_label}>{props.label}</label>
                <input
                    id={props.id}
                    className={styles.form_input}
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.value}
                    onChange={props.handleInputChange}
                    required />
                {props.type === 'password' ? 
                    <img
                        className={styles.password_icon}
                        onClick={togglePassword}
                        src={visibilityIcon} alt="" />
                    : ''
                }
            </div>
        </>
    )
}

export default FormInput