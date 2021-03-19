import { useContext } from 'react';
import { challengesContexts } from '../contexts/ChallengesContexts';
import style from '../Style/components/Profile.module.css'

export default function Profile(){
    const{ Level } = useContext(challengesContexts)


    return(
        <div className={style.profileContainer}>
            {/* <img src="http://github.com/caciano4.png" alt="Walter caciano"/> */}
            <img src="http://github.com/caciano4.png" alt="Walter caciano"/>
            <div>
                <strong>Walter Caciano</strong>
<p>  <img src="icon/LVL.png" className={style.IconContainer}></img>Level {Level} </p>

            </div>
        </div>
    );
}