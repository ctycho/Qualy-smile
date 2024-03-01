import { FC } from "react";
import styles from './TeamMember.module.css'

interface ITeamMember { 
    avatar: string
    last_name: string
    first_name: string
    middle_name: string
    job_title: string
    even: boolean
}

const TeamMember: FC<ITeamMember> = (props) => {

    return (
        <>
            <div className={`${styles.team_member} ${props.even ? styles.even_member : ''}`}>
                <div className=""></div>
                <img src={props.avatar} alt="" className={styles.team_member_img} />
                <div className={`${styles.team_member_info} ${styles.bottom_even}`}>
                    <div className={styles.team_member_name}>{props.last_name} {props.first_name}<br />{props.middle_name}</div>
                    <div className={styles.team_member_title}>{props.job_title}</div>
                </div>
            </div>
        </>
    )
}

export default TeamMember