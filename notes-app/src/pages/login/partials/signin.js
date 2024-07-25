import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../../components/atoms/input';
import Button from '../../../components/atoms/button';
import styles from './partials.module.scss';

function Signin(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleLogin=()=>{

    }

    return(
        <div className={styles.form}>
            <Button text="Join with Google" icon="ri:google-fill" className={styles.google}/>
            <div className={styles.option}>
                <span>Or join with e-mail address</span>
            </div>
            <article className={styles.details}>
                <Input 
                        type="email" 
                        value={email} 
                        placeholder={'Enter the email'} 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input 
                        type="password" 
                        value={password} 
                        placeholder={'Enter the password'}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button 
                        text="Join with Email" 
                        icon="material-symbols:login" 
                        className={styles.emailBtn}
                        handleClick={handleLogin}
                    />
            </article>
        </div>
    );
};

export default Signin;