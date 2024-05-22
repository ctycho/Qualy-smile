import { Helmet } from 'react-helmet-async'
import styles from './ServicesPage.module.css'
import HeaderLight from '../../components/HeaderLight/HeaderLight';
import Navigation from '../../components/Navigation/Navigation';
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import icon1 from '../../assets/images/cards/card-icon-1.svg'
import icon2 from '../../assets/images/cards/card-icon-2.svg'
import icon3 from '../../assets/images/cards/card-icon-3.svg'
import icon4 from '../../assets/images/cards/card-icon-4.svg'
import icon5 from '../../assets/images/cards/card-icon-5.svg'
import icon6 from '../../assets/images/cards/card-icon-6.svg'
import icon7 from '../../assets/images/cards/card-icon-7.svg'
import setColorForSafari from '../../utils/utils'


const ServicesPage = () => {
    document.body.style.overflow = 'auto'
    document.body.style.background = '#fafbf3'
    setColorForSafari('#fafbf3')

    return (
        <>
            <Helmet>
                <title>Услуги - Qualy-smile</title>
                <meta name='description' content='Услуги стоматологии' />
                <meta name='keywords' content='Стоматология, лечение зубов, dental clinic, dental' />
            </Helmet>
            <div className='main_wrapper'>
                <div className='_container'>
                    <HeaderLight />
                    <div className={styles.maina_content}>
                        <div>
                            <Navigation theme='#000' />
                        </div>
                        <div className={styles.service_items}>
                            <ServiceCard name='Лечение дёсен' price='От 500 ₽' icon={icon1} />
                            <ServiceCard name='Лечение под микроскопом' price='От 6 400 ₽' icon={icon2} />
                            <ServiceCard name='Компьютерная диагностика' price='От 1 500 ₽' icon={icon7} />
                            <ServiceCard name='Имплантация под ключ' price='От 21 000 ₽' icon={icon3} />
                            <ServiceCard name='Протезирование' price='От 10 000 ₽' icon={icon4} />
                            <ServiceCard name='Установка брекетов' price='От 12 000 ₽' icon={icon5} />
                            <ServiceCard name='Установка виниров' price='От 20 000 ₽' icon={icon6} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesPage