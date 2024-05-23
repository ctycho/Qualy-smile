import { Helmet } from 'react-helmet-async'
import styles from './ContactsPage.module.css'
import HeaderGreen from '../../components/HeaderGreen/HeaderGreen';
import Navigation from '../../components/Navigation/Navigation';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import setColorForSafari from '../../utils/utils'



const ContactsPage = () => {
    document.body.style.overflow = 'auto'
    document.body.style.background = '#1c2e28'
    setColorForSafari('#1c2e28')


    const apiKey = '54e61956-31cf-4db7-adb8-7b33cb5d8e6f'
    const date = new Date()
    const day = date.getDay()

    return (
        <>
            <Helmet>
                <title>Контакты - Qualy-smile</title>
                <meta name='description' content='Контакты стоматалогии' />
                <meta name='keywords' content='Стоматология, лечение зубов, dental clinic, dental' />
            </Helmet>
            <div className='main_wrapper'>
                <div className='_container'>
                    <HeaderGreen />
                    <div className={styles.maina_content}>
                        <div>
                            <Navigation theme='#fff' />
                        </div>
                        <div>
                            <div className={styles.map}>
                                <YMaps query={{ apikey: apiKey }}>
                                    <Map
                                        defaultState={{
                                            center: [55.78829954078806, 49.174717390408745],
                                            zoom: 14
                                        }}
                                    >
                                        <Placemark 
                                            geometry={[55.78829954078806, 49.174717390408745]}

                                            options={{
                                                preset: 'islands#greenDotIconWithCaption',
                                            }}
                                            />
                                    </Map>
                                </YMaps>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 gap-y-8">
                                <div className="worktime_info">
                                    <div className="text-3xl md:text-4xl text-gray font-semibold mb-6">Часы работы</div>
                                    <div className="worktime_items">
                                        <div className={`${styles.worktime_item} ${day === 1 ? styles.current_day : ''} text-2xl font-normal mb-3`}><span>Пн</span><span>9:00 - 20:00</span></div>
                                        <div className={`${styles.worktime_item} ${day === 2 ? styles.current_day : ''} text-2xl font-normal mb-3`}><span>Вт</span><span>9:00 - 20:00</span></div>
                                        <div className={`${styles.worktime_item} ${day === 3 ? styles.current_day : ''} text-2xl font-normal mb-3`}><span>Ср</span><span>9:00 - 20:00</span></div>
                                        <div className={`${styles.worktime_item} ${day === 4 ? styles.current_day : ''} text-2xl font-normal mb-3 text-apple`}><span>Чт</span><span>9:00 - 20:00</span></div>
                                        <div className={`${styles.worktime_item} ${day === 5 ? styles.current_day : ''} text-2xl font-normal mb-3`}><span>Пт</span><span>9:00 - 20:00</span></div>
                                        <div className={`${styles.worktime_item} ${day === 6 ? styles.current_day : ''} text-2xl font-normal mb-3`}><span>Сб</span><span>9:00 - 16:00</span></div>
                                        <div className={`${styles.worktime_item} ${day === 0 ? styles.current_day : ''} text-2xl font-normal`}><span>Вс</span><span>Выходной</span></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="address mb-6">
                                        <div className="text-3xl md:text-4xl text-gray font-semibold mb-6">Контакты</div>
                                        {/* <div className="text-2xl font-normal mb-3">г. Казань, ул. Спортивная 33</div> */}
                                        <div className="text-2xl font-normal mb-3">Тел: <a href="tel:+78432727184">+7 (843) 272-71-84</a></div>
                                        <div className="text-2xl font-normal mb-3">Почта: <a href="mailto:Algadent116@mail.ru">Algadent116@mail.ru</a></div>
                                    </div>
                                    <div className="address">
                                        <div className="text-3xl md:text-4xl text-gray font-semibold mb-6">Резвизиты</div>
                                        <div className="text-2xl font-normal mb-3">ООО "Алгадент+"</div>
                                        <div className="text-2xl font-normal mb-3">420073, Республика Татарстан, <br/>г. Казань, ул. Спортивная, д. 33, помещ. 24<br />ОГРН: 1221600029090</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactsPage