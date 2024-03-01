import { useRouteError } from "react-router-dom";
import styles from './ErrorPage.module.css'
import HeaderBlack from "../../components/HeaderBlack/HeaderBlack";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <>
            <div className='main_wrapper'>
                <div className='_container'>
                    <HeaderBlack />
                    <div id={styles.error_page}>
                        <h1 className="mb-3">Oops!</h1>
                        <p className="mb-3">Sorry, an unexpected error has occurred.</p>
                        <p>
                            <i className={styles.error_message}>{error.statusText || error.message}</i>
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}