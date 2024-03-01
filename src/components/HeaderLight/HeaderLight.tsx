import { Link } from 'react-router-dom';
import { FC, useState } from "react";
import styles from './HeaderLight.module.css'
import logo from '../../assets/images/logo/logoH2.svg'

interface IHeaderLight { }

const HeaderLight: FC<IHeaderLight> = () => {

    return (
        <>
            <div className={styles.header}>
                <a href="/" className=""><img src={logo} alt="" className={styles.header_logo} /></a>
                <div className={styles.header_items}>
                    <div className={`${styles.header_item} ${styles.header_phone}`}><a href="tel:+78432727184">+7 (843) 272-71-84</a></div>
                    <div className={`${styles.header_item} ${styles.header_dot}`}><span></span></div>
                    <div className={`${styles.header_item} ${styles.header_mail}`}><a href="mailto:Algadent116@mail.ru">Algadent116@mail.ru</a></div>
                </div>
                <div className={styles.header_underline}></div>
            </div>
        </>
    )
}

export default HeaderLight