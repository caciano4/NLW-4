/////////// Importações do react e + ///////

import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import Countdown from "../Components/Countdown";
import { challengesContexts } from "./ChallengesContexts";

///interfaces necessarias para utilizar Props(propriedades) e Contexts ///

interface CountDownProviderProps { children: ReactNode; }
interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountDown: () => void;
    timerToUser: () => void;
}
/// um objto pra trabalhar o timer ////

let CountdownTimeout: NodeJS.Timeout

///exportações de todo o contexto ///

export const CountDownContext = createContext({} as CountDownContextData);
export function CountDownProvider({ children }: CountDownProviderProps) {


    ///Apenas Constantes
    const [time, setTime] = useState(0.1 * 60);/// aqui é o contador os minutos x os segundos
    const [isActive, setIsActive] = useState(false);// com o boolean false a contagem não começa auto
    const [hasFinished, setHasFinished] = useState(false);
   
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const { startNewChallenge,activeChallenge} = useContext(challengesContexts)
    
    ///Apenas funções

    function resetCountDown() {
        return (setIsActive(false),
            clearTimeout(CountdownTimeout),
            setTime(0.1 * 60),
            setHasFinished(false))

    } ///botão para resetar a contagem

    function startCountdown() {
        setIsActive(true)
    
    }

    function timerToUser(){
        return (
           
            <input type="number" step="1">


            </input>
            
        )
    } 
    ///Apenas hook

    useEffect(() => {
        if (isActive && time > 0) {
            CountdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <CountDownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountDown,
                timerToUser
            }}>

            {children}
        </CountDownContext.Provider>

    )
}