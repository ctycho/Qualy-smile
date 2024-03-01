import { Link } from 'react-router-dom';
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack';
import HomeCard from '../../components/HomeCard/HomeCard';
import styles from './HomePage.module.css'
import icon_a from '../../assets/images/home/icons1.svg'
import icon_b from '../../assets/images/home/icons2.svg'
import icon_c from '../../assets/images/home/icons3.svg'
import icon_d from '../../assets/images/home/icons4.svg'


const HomePage = () => {
    document.body.style.background = '#121212'

    return (
        <>
            <div className='main_wrapper'>
                <div className='_container'>
                    <div className={styles.home_page}>
                        <HeaderBlack />
                        <div className={styles.home_title}>Качественное лечение зубов <br className='max-[900px]:hidden' />в Казани</div>
                        <div className={styles.home_cards}>
                            <Link to='/about'><HomeCard type='card_a' icon={icon_a} /></Link>
                            <Link to='/services'><HomeCard type='card_b' icon={icon_b} /></Link>
                            <Link to='/team'><HomeCard type='card_c' icon={icon_c} /></Link>
                            <Link to='/contacts'><HomeCard type='card_d' icon={icon_d} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage