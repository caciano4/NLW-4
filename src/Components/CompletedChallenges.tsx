import { useContext } from 'react';
import { challengesContexts } from '../contexts/ChallengesContexts';
import style from '../Style/components/CompletedChallenges.module.css'
import {ChallengesProvider } from '../contexts/ChallengesContexts'

   

export default function CompletedChallenges(){

    const {challengeCompleted} = useContext(challengesContexts)

    return(
        <div className={style.CompletedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengeCompleted}</span>
        </div>
    );
}