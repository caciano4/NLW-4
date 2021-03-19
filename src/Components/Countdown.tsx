import { useState,useEffect, useContext } from 'react';
import style from '../Style/components/Countdown.module.css'
import {challengesContexts} from '../contexts/ChallengesContexts'
import { CountDownContext, CountDownProvider } from '../contexts/countDownContext';

let CountdownTimeout: NodeJS.Timeout

export default function Countdown() {
    const {startNewChallenge} = useContext(challengesContexts)
    const {isActive,hasFinished,startCountdown,minutes,seconds,resetCountDown} = useContext(CountDownContext)

    const [minutesLeft,minutesRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');

  
   

   ////////////////------------------////////////////
    return (
        <div>
            <div className={style.CountdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
             
            {hasFinished ? (
            <button
                className={`${style.CountdownButton}`}
                disabled>
                Congratulation.! 🎉
                {/* <img src="icon/congrats.svg" className={`${style.ImageButton}`} alt="concluido"></img> */}
                
            </button>
            ):(
            <>
            {/* ////// Apenas os Botões ////// */}
            {isActive ? (///Condiçoes (if ternário) se estiver ativo ao apertar o reset inicia novamente o contador
                <button type="button"
                className={`${style.CountdownButton} ${style.CountdownButtonActive}`}
                onClick={resetCountDown}>Reiniciar Ciclo</button>
                ):( ///se não Ele Apenas inicia a contagem
                <button type="button"
                className={style.CountdownButton}
                onClick={startCountdown}>Iniciar Um Ciclo</button>
                ) }
             </>)}
                
            
            
        </div>
    );
}