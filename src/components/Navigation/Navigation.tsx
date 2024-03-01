import { NavLink } from 'react-router-dom';
import { FC, useState } from "react";
import styles from './Navigation.module.css'

interface INavigation { 
    theme: string
}

const Navigation: FC<INavigation> = (props) => {

    return (
        <>
            <nav className={styles.nav_items}>
                <NavLink to='/' style={({ isActive }) => ({
                    color: isActive ? props.theme : '',
                })} className={`${props.theme == '#000' ? styles.dark_theme : styles.light_theme} text-3xl md:text-4xl`}>Главная</NavLink>
                <NavLink to='/about' style={({ isActive }) => ({
                    color: isActive ? props.theme : '',
                })} className={`${props.theme == '#000' ? styles.dark_theme : styles.light_theme} text-3xl md:text-4xl`}>О нас</NavLink>
                <NavLink to='/services' style={({ isActive }) => ({
                    color: isActive ? props.theme : '',
                })} className={`${props.theme == '#000' ? styles.dark_theme : styles.light_theme} text-3xl md:text-4xl`}>Услуги</NavLink>
                <NavLink to='/team' style={({ isActive }) => ({
                    color: isActive ? props.theme : '',
                })} className={`${props.theme == '#000' ? styles.dark_theme : styles.light_theme} text-3xl md:text-4xl`}>Команда</NavLink>
                <NavLink to='/contacts' style={({ isActive }) => ({
                    color: isActive ? props.theme : '',
                })} className={`${props.theme == '#000' ? styles.dark_theme : styles.light_theme} text-3xl md:text-4xl`}>Контакты</NavLink>
            </nav>
        </>
    )
}

export default Navigation