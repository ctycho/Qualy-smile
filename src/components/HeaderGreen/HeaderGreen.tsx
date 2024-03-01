import { Link } from 'react-router-dom';
import { FC, useState } from "react";
import styles from './HeaderGreen.module.css'
import logo from '../../assets/images/logo/logoH3.svg'
import telegram from '../../assets/images/icons/header_telegram.svg'
import whatsup from '../../assets/images/icons/header_ws.svg'

interface IHeaderGreen { }

const HeaderGreen: FC<IHeaderGreen> = () => {

    return (
        <>
            <div className={styles.header}>
                <a href="/" className=""><img src={logo} alt="" className={styles.header_logo} /></a>
                <div className={`${styles.header_items} 'text-white'`}>
                    <div className={`${styles.header_item} 'md:hidden'`}>
                        <a href="https://telegram.me/+79397338010" target="_blank"><img src={telegram} alt="" className="w-8" /></a>
                    </div>
                    <div className={`${styles.header_item} 'md:hidden'`}>
                        <a href="https://wa.me/+79397338010" target="_blank"><img src={whatsup} alt="" className="w-8" /></a>
                    </div>
                </div>
                <div className={styles.header_underline}></div>
            </div>
        </>
    )
}

export default HeaderGreen