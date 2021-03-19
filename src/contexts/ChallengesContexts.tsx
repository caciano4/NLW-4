//Interfaces ou type
interface ChallengesProviderProps 
{ children: ReactNode;
            Level:number,
            currentExperience:number,
            challengeCompleted:number; }

interface challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface challengesContextData {
    Level: number;
    LevelUp: () => void;
    CurrentyExperience: number;
    challengeCompleted: Number;
    startNewChallenge: () => void;
    activeChallenge: challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void;
    closeLevelUpModal:() => void;
}


// Importações e exportações

import { createContext, useState, ReactNode,useEffect } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie';
import { LevelUpModal } from '../Components/LevelUpModal';
export const challengesContexts = createContext({} as challengesContextData);
export function ChallengesProvider({ children}: ChallengesProviderProps) {


    // Variaveis
    const [Level, setLevel] = useState(0);
    const [CurrentyExperience, setCurrentyExperience] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((Level + 1) * 5, 2)
    const [isLevelUpModalOpen,setIsLevelUpModalOpen] = useState(false)

    ////////////-///////////-///////////-///

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookies.set('Level' , String(Level));
        Cookies.set('currentExperience' , String(CurrentyExperience));
        Cookies.set('ChallengesCompleted' , String(challengeCompleted));
        [Level, CurrentyExperience, challengeCompleted]});

    // Funções
    function LevelUp() {
        setLevel(Level + 1);
        setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false);
    }

   

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)
        
        new Audio('/Sons/Notification.mp3').play()

        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio ⚔',{
                body:`Valendo ${challenge.amount} XP`
            });
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }
        const { amount } = activeChallenge
        let finalExperience = CurrentyExperience + amount;
        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            LevelUp()
        }

        setCurrentyExperience(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1)
    }


    //Retorno
    return (
        <challengesContexts.Provider
            value={{
                Level,
                LevelUp,
                CurrentyExperience,
                challengeCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completeChallenge,
                closeLevelUpModal
            }}>

            {children}

          { isLevelUpModalOpen && <LevelUpModal /> }  

        </challengesContexts.Provider>
    )

}

//Quando criamos um Componente e ele tem Conteudos dentro ele necessita especificar que ele é children.
// temos que fazer a tipagem da propriedade children podemos usar type ou interface como acima
//No final do nome do componente criado adicionamos Props de pois o atributo {children: ReactNode} temos que importar do 'react' o ReactNode;