import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useClickOutside } from '../../hooks/useClickOutside'
import styles from './SideBar.module.css'

interface ISidebar {
    isOpen: boolean
    setOpenedModal: Dispatch<SetStateAction<boolean>>,
}

const Sidebar: FC<ISidebar> = ({ isOpen, setOpenedModal }) => {
    
    const refModal = useRef(null)
    useClickOutside(refModal, setOpenedModal)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        }
    }, [isOpen])

    return (
        <>
            <div ref={refModal} className={`${styles.sidebar} ${isOpen ? styles.sidebar_active : ''}`}>
                <div className={styles.sidebar_body}>
                    <div className={styles.nav_items}>
                        <div className={styles.nav_item}><Link to='/about'>О нас</Link></div>
                        <div className={styles.nav_item}><Link to='/services'>Услуги</Link></div>
                        <div className={styles.nav_item}><Link to='/team'>Команда</Link></div>
                        <div className={styles.nav_item}><Link to='/contacts'>Контакты</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar