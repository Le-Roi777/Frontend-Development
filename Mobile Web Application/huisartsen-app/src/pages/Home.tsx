import React from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonButton, IonIcon, IonAvatar, IonBadge } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';

import HomeCard from '../components/HomeCard';
import DateDisplay from '../components/DateDisplay';

import './Home.css';

const Home: React.FC = () => {

  function toEmergency () {
    window.location.href = "/alow/emergency";
  }

  return (
    <IonPage>

      <IonHeader>

        <IonToolbar id="toolbarContainer" color="primary">

          <div id="avatarContainer" slot="end" className="ion-padding">

            <IonAvatar id="user">
              <img src='./assets/img/user.png' alt="" />
              <IonBadge id="notifications-badge" color="primary">1</IonBadge>
            </IonAvatar>

            <IonButton id="logoutBtn" size="small" fill="clear" slot="secondary" href="/#">
              <IonIcon slot="end" icon={logOutOutline} />
              <IonLabel id="logout">Log Out</IonLabel>
            </IonButton>

          </div>

          <DateDisplay />
          <IonTitle size="large">Home</IonTitle>
          <IonButton id="helpBtn" size="small" fill="clear" class="ion-no-padding">Help?</IonButton>
          <IonButton id="pages-emer" size="small" color="danger" class="ion-padding" onClick={toEmergency}>Emergency</IonButton>

        </IonToolbar>

      </IonHeader>

      <IonContent>
        <HomeCard />
      </IonContent>

    </IonPage>
  );
};

export default Home;
