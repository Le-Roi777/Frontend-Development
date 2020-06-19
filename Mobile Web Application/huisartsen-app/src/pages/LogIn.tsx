import React from 'react';

import { IonContent, IonPage, IonText } from '@ionic/react';

import LogInContainer from '../components/LogInContainer';
import PasswordMailContainer from '../components/PasswordMailContainer';

import './LogIn.css';

const LogIn: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">

        <div className="imgContainer">
          <img className='logo' src='./assets/img/logo.png' alt="" />
        </div>

        <IonText class="ion-text-center">
          <h2>Welcome!</h2>
          <p>Please Sign in to continue</p>
        </IonText>

        <LogInContainer />
        <PasswordMailContainer/>

      </IonContent>

    </IonPage>
  );
};

export default LogIn;