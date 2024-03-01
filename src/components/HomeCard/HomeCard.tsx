import { FC } from "react";
import styles from './HomeCard.module.css'

interface IHomeCard {
    type: string
    icon: string
}


const HomeCard: FC<IHomeCard> = (props) => {
    
    
    return (
        <>
            <div className={`${styles.home_card} ${styles[props.type]}`}>
                <img src={props.icon} alt="" />
                <div className={styles.card_bottom}>
                    03.<br/>Наша команда
                </div>
            </div>
        </>
    )
}

export default HomeCard