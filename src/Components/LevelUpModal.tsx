import { useContext } from 'react'
import { challengesContexts } from '../contexts/ChallengesContexts'
import styles from '../Style/components/LevelUpModal.module.css'
import { useState } from 'react';


export function LevelUpModal(){
    const {Level,closeLevelUpModal } = useContext(challengesContexts)
    
    
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
            <header>{Level}</header>

            <strong>Parábens</strong>
            <p>Você Alcançou o Proximo Level</p>

            <button type="button" onClick={closeLevelUpModal} >
            <img src="icon/close.svg" alt="Fechar Modal"/>
            </button>
            </div>


            
           


        </div>
 
    )
}