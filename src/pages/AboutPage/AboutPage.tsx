import styles from './AboutPage.module.css'
import HeaderLight from '../../components/HeaderLight/HeaderLight';
import Navigation from '../../components/Navigation/Navigation';
import image from '../../assets/images/about_us.png'
import setColorForSafari from '../../utils/utils'


const AboutPage = () => {
    document.body.style.overflow = 'auto'
    document.body.style.background = '#fafbf3'
    setColorForSafari('#fafbf3')

    return (
        <>
            <div className='main_wrapper'>
                <div className='_container'>
                    <HeaderLight />
                    <div className={styles.maina_content}>
                        <div>
                            <Navigation theme='#000' />
                        </div>
                        <div>
                            <img src={image} alt="" className={styles.content_img}/>
                            <div className={styles.content_text}>Qualy smile - это полный спектр стоматологических услуг для тех, кто ценит качество, опыт и высокий уровень сервиса.</div>
                            <div className={`${styles.content_text} ${styles.content_text_sub}`}>Кабинеты оборудованы самым новым и современным оборудованием. У нас работают лучшие специалисты в своей сфере.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage