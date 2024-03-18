import { useState } from "react";
import Sidebar from "../SideBar/SideBar";
import logo from '../../assets/images/logo/logoH.svg'
import styles from './HeaderBlack.module.css'


// @ts-ignore
const HeaderBlack = () => {

    const [isOpen, setOpenedModal] = useState(false)

    const toggleSidebar = () => {
        if (!isOpen) {
            setOpenedModal(true)
        } else {
            setOpenedModal(false)
        }
    }

    return (
        <>
            <div className={styles.header}>
                <a href="/"><img src={logo} alt="" className={styles.header_logo} /></a>
                <div className={styles.header_column}>
                    <div className={styles.header_items}>
                        <div className={`${styles.header_item} ${styles.header_phone}`}><a href="tel:+78432727184">+7 (843) 272-71-84</a></div>
                        <div className={`${styles.header_item} ${styles.header_dot}`}><span></span></div>
                        <div className={`${styles.header_item} ${styles.header_mail}`}><a href="mailto:Algadent116@mail.ru">Algadent116@mail.ru</a></div>
                        <div className={styles.header_item}>
                            <div id="burger" className={`${styles.burger__btn} ${styles.burger_white} ${isOpen ? styles.burger_active : ''}`} onClick={toggleSidebar}>
                                <span className={styles.burger_line}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar isOpen={isOpen} setOpenedModal={setOpenedModal} />
        </>
    );
}

export default HeaderBlack