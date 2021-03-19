import { useContext, useState } from 'react';
import { challengesContexts } from '../contexts/ChallengesContexts';
import { CountDownContext } from '../contexts/countDownContext';
import style from '../Style/components/ChallengeBox.module.css'
 

export default function ChallengeBox() {
    ////------------Variaveis---------/////////
    const {resetCountDown} = useContext(CountDownContext)
    const {activeChallenge,resetChallenge,completeChallenge} = useContext(challengesContexts);
    

    //////////////-------------Funções-----------------///////////////
    function handleChallengeSucess(){
        completeChallenge();
        resetCountDown();

    }
    
    
    
    function handleChallengeFail(){
        resetCountDown();
        resetChallenge();
    }

    ///////------------Retorno-------------/////////////
    return (
        <div className={style.ChallengeBoxContainer}>

            {activeChallenge ?
                (
                    <div className={`${style.ChallengeBoxActive}`}>
                        <header><b> Ganhe {activeChallenge.amount} XP! </b></header>
                        <main>
                            <img src="icon/exercicio.svg" alt=""/>
                            <strong>Novo Desafio!</strong>
                            <p>{activeChallenge.description}</p>

                        </main>
                        <footer>
                            <button type="button" className={style.ButtonFail} onClick={handleChallengeFail}>
                                Falhei <img src="icon/sad.svg" alt="triste"/></button>
                            
                            
                            <button type="button" className={style.ButtonSucceed} onClick={handleChallengeSucess}>Concluido <img src="icon/happy.svg" alt="Parabens"/></button>
                        </footer>
                    </div>
                )
                :
                (
                    <div className={style.ChallengeBoxNotActive}>

                        <b>Finalize Um Ciclo Para Receber Uma Tarefa! </b>
                        <p><img src="icon/Up.png" alt="Proximo Nivel" />Avance Para o Proximo Nivel.</p>

                    </div>

                )}

        </div>

    );
}