import Head from 'next/head'
import styles from '../Style/pages/Home.module.css'
import {GetServerSideProps} from 'next';

import CompletedChallenges from '../Components/CompletedChallenges';
import Countdown from '../Components/Countdown';
import { ExperienceBar } from '../Components/ExperienceBar';
import Profile from "../Components/Profile";
import ChallengeBox from '../Components/ChallengeBox';
import {CountDownProvider} from '../contexts/countDownContext'
import { challengesContexts, ChallengesProvider} from '../contexts/ChallengesContexts'
import {timerToUser} from '../contexts/countDownContext'

export default function Home(props) {
  

  return (
    <ChallengesProvider  Level ={props.Level}
                         currentExperience ={props.ExperienceBar}
                         challengeCompleted ={props.challengeCompleted}>


    <div className={styles.container}>
      <Head><title>Next-Pomodoro</title></Head>
      <ExperienceBar />
      <CountDownProvider>
        <section>
        
          <div >
            <Profile />
            <CompletedChallenges />
            <Countdown />
            <timerToUser />
          </div>

          <div>
            <ChallengeBox />
          </div>

        </section>
      </CountDownProvider>
    </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps:GetServerSideProps = async (ctx) =>{
  // Chamada API
  // const user  = {
  //   Level: 1,
  //   currentExperience:58,
  //   challengeCompleted: 2,

  // }
    const {Level, currentExperience, challengeCompleted} = ctx.req.cookies;
    
    return{
      props:  {
        Level:Number(Level), 
        currentExperience:Number(currentExperience),
        challengeCompleted:Number(challengeCompleted)
      }
    }
}


//Exemplo do funcionamento do Next-js

//Back-end(ruby)(2)

//Next.js (Node.js)(1)

//Front-end(3)

//ctx = context
//req = requisicao