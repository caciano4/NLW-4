import { useContext } from 'react';
import { challengesContexts } from '../contexts/ChallengesContexts';
import style from '../Style/components/ExperienceBar.module.css'

export function ExperienceBar() {
    
    const {CurrentyExperience, experienceToNextLevel} = useContext(challengesContexts)
    const percentToNextLevel = Math.round(CurrentyExperience * 100) / experienceToNextLevel;

    return (
        <header className={style.experienceBar}>
            <span> 0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={style.currentyExperience} style={{ left: `${percentToNextLevel}%` }}> {CurrentyExperience} xp</span>
            </div>
            <span> {experienceToNextLevel} </span>
            <img src="icon/Certificate.svg" alt="Certificate"/>

        </header>

    );
}