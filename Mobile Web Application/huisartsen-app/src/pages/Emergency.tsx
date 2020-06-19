import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { IonPage, IonButton, IonLabel, IonContent, IonAlert, IonIcon, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

import './Emergency.css';
import './CallingAnimation.css';

const Emergency: React.FC = () => {

    const [showAlert1, setShowAlert1] = useState(false);
    const history = useHistory();

    let emergencyTime = new Date();
    let hour = emergencyTime.getHours();
    let min = addZero(emergencyTime.getMinutes());

    let emergencyDate = new Date().toDateString();

    let calling = document.getElementById("calling") as HTMLElement;
    let tabBar = document.getElementById("tabBar") as HTMLElement;

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function simulateCall() {
        calling.style.display = "grid";
        tabBar.style.display = "none";
    }

    function endCall() {
        calling.style.display = "none";
        if (window.location.href.indexOf("/alow/emergency") > -1) {
            tabBar.style.display = "inline-grid";
        }
        else {
            tabBar.style.display = "none";
        }
    }

    function toEmergencyForm() {

        if (window.location.href.indexOf("/alow/emergency") > -1) {
            // history.push("/alow/emform");
            window.location.href = "/alow/emform";
        }
        else {
            history.push("/emform");
            // window.location.href = "/emform";
        }
    }

    function backToLogIn() {
        history.push("/login");
    }

    return (

        <IonPage>

            <div id="calling">
                <h3>Calling</h3>
                <h4>112</h4>
                <div className="call-animation">
                    <img src="./assets/img/phone.png" alt="" onClick={endCall} />
                </div>
            </div>

            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle class="ion-text-center">Emergency</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen class="ion-padding">

                <div id="emergency-time">
                    <p id="hour">{hour}:</p>
                    <p id="min">{min}</p>
                </div>

                <div id="emergency-date">
                    <p id="day">{emergencyDate}</p>
                </div>

                <div id="siren-container" className="ion-padding">
                    <img src="./assets/img/siren.png" alt="" />
                </div>

                <IonButton id="emergency-btn" color="danger" expand="block" onClick={() => setShowAlert1(true)}>
                    <IonLabel>Alert Doctor</IonLabel>
                </IonButton>

                <IonButton id="emergency-btn-back" expand="block" onClick={backToLogIn}>
                    <IonIcon slot="start" icon={arrowBack}></IonIcon>
                    Back to Log In
                </IonButton>

            </IonContent>

            <IonAlert
                id='alert-emer'
                isOpen={showAlert1}
                onDidDismiss={() => setShowAlert1(false)}
                cssClass='my-custom-class'
                header={'CAUTION!!!'}
                message={'<strong>You are about to make an emergency call.</strong> <br><br> <strong>Abuse will result in disabling this function.</strong><br>'}
                buttons={[
                    {
                        text: 'Life threatening Situation',
                        handler: () => {
                            simulateCall();
                        }
                    },
                    {
                        text: 'Urgent Situation',
                        handler: () => {
                            toEmergencyForm();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    },
                ]}
            />

        </IonPage>
    );
};

export default Emergency;