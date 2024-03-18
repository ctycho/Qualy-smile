import { FC } from "react";
import styles from './HomeCard.module.css'
import arrow from '../../assets/images/arrow_main_page.svg'

interface IHomeCard {
    type: string
    icon: string
    desc: string
    subDesc?: string
}


const HomeCard: FC<IHomeCard> = (props) => {
    
    
    return (
        <>
            <div className={`${styles.home_card} ${styles[props.type]}`}>
                <img src={props.icon} alt="" className={styles.card_icon} />
                {!props.subDesc && <div className={styles.card_bottom} dangerouslySetInnerHTML={{__html: props.desc}} />}
                {props.subDesc && (
                    <div className={styles.card_bottom}>
                        <div className={styles.bottom_two}><span>02.<br />Наши<br />услуги</span><img src={arrow} alt="" /></div>
                        <div className={styles.sub_desc}>Центр эстетической стоматологии и имплантологии</div>
                    </div>)}
            </div>
        </>
    )
}

export default HomeCard