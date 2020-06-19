import React from "react";

import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { home, chatbubbleEllipses, calendar, people, eyedrop, water } from "ionicons/icons";

import "./bottomtabs.css";

const BotTabs: React.FC = () => {

    return (

        <IonTabBar id="tabBar" slot="bottom">
            
            <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="chat" href="/chat">
                <IonIcon icon={chatbubbleEllipses} />
                <IonLabel>chat</IonLabel>
            </IonTabButton>

            <IonTabButton tab="appointment" href="/appointment">
                <IonIcon icon={calendar} />
                <IonLabel>appointment</IonLabel>
            </IonTabButton>

            <IonTabButton tab="referral" href="/referral">
                <IonIcon icon={people} />
                <IonLabel>referral</IonLabel>
            </IonTabButton>

            <IonTabButton tab="blood test" href="/tests">
                <IonIcon icon={water} />
                <IonLabel>blood test</IonLabel>
            </IonTabButton>

            <IonTabButton tab="medicine" href="/medicine">
                <IonIcon icon={eyedrop} />
                <IonLabel>my medicine</IonLabel>
            </IonTabButton>
            
        </IonTabBar>
    );
};

export default BotTabs;