import { FC } from 'react'
import styles from './ServiceCard.module.css'
import visibilityIcon from '../../assets/icons/visibility.svg'


interface IServiceCard {
    name: string
    price: string
    icon: string
}

const ServiceCard: FC<IServiceCard> = (props) => {

    return (
        <>
            <div className={styles.service_item}>
                <div className={styles.service_item_icon}><img src={props.icon} alt="" /></div>
                <div className={styles.service_item_name}>{props.name}</div><div className={styles.service_item_price}>{props.price}</div>
            </div>
        </>
    )
}

export default ServiceCard