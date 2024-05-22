import { Helmet } from 'react-helmet-async';
import LazyLoad from "react-lazyload";
import styles from './TeamPage.module.css'
import HeaderLight from '../../components/HeaderLight/HeaderLight';
import Navigation from '../../components/Navigation/Navigation';
import TeamMember from '../../components/TeamMember/TeamMember';
import team2 from '../../assets/images/team/emp-2.jpg'
import team3 from '../../assets/images/team/emp-3.jpg'
import team4 from '../../assets/images/team/emp-4.jpg'
import team5 from '../../assets/images/team/emp-5.jpg'
import setColorForSafari from '../../utils/utils'

const TeamPage = () => {
    document.body.style.overflow = 'auto'
    document.body.style.background = '#fafbf3'
    setColorForSafari('#fafbf3')

    return (
        <>
            <Helmet>
                <title>Команда - Qualy-smile</title>
                <meta name='description' content='Команда врачей стоматалогии' />
                <meta name='keywords' content='Стоматология, лечение зубов, dental clinic, dental' />
            </Helmet>
            <div className='main_wrapper'>
                <div className='_container'>
                    <HeaderLight />
                    <div className={styles.maina_content}>
                        <div>
                            <Navigation theme='#000' />
                        </div>
                        <LazyLoad>
                            <div className={styles.team_items}>
                                <TeamMember
                                    avatar={team2}
                                    last_name='Хафизов'
                                    first_name='Раис'
                                    middle_name='Фанисович'
                                    job_title='Главный врач -врач имплантолог хирург, ортопед'
                                    even={false}
                                />
                                <TeamMember
                                    avatar={team3}
                                    last_name='Хайруллина'
                                    first_name='Лилия'
                                    middle_name='Мансуровна'
                                    job_title='Врач - стоматолог - терапевт'
                                    even={true}
                                />
                                <TeamMember
                                    avatar={team4}
                                    last_name='Магомедалиев'
                                    first_name='Магомед'
                                    middle_name='Магомедалиевич'
                                    job_title='Стоматолог-терапевт, ортопед'
                                    even={false}
                                />
                                <TeamMember
                                    avatar={team5}
                                    last_name='Шахнавазов'
                                    first_name='Сулейман'
                                    middle_name='Рабаданович'
                                    job_title='Врач - стоматолог - ортодонт'
                                    even={true}
                                />
                            </div>
                        </LazyLoad>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamPage