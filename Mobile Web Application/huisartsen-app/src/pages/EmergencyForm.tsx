import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonItem, IonLabel, IonSelect, IonSelectOption, IonCheckbox, IonAlert } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

import './EmergencyForm.css';

const EmergencyForm: React.FC = () => {

    const history = useHistory();

    const [showAlert2, setShowAlert2] = useState(false);
    const [showAlert3, setShowAlert3] = useState(false);
    const [showAlert4, setShowAlert4] = useState(false);

    const [injury, setInjury] = useState<string>();

    function backToLogIn() {
        history.push("/login");
    }

    return (

        <IonPage>

            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle class="ion-text-center">Emergency</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <h5 id="heading-injury">Suspected Injury</h5>
                <IonItem id="injury-select">
                    <IonLabel>Make Selection</IonLabel>
                    <IonSelect value={injury} cancelText="Cancel" okText="Okay" onIonChange={e => setInjury(e.detail.value)}>
                        <IonSelectOption value="Fracture">Fracture or severe sprain/bruising</IonSelectOption>
                        <IonSelectOption value="Bleeding">Bleeding</IonSelectOption>
                        <IonSelectOption value="Fall">Severe fall</IonSelectOption>
                        <IonSelectOption value="Head">Head injury</IonSelectOption>
                        <IonSelectOption value="combustion">Combustion</IonSelectOption>
                        <IonSelectOption value="overdose">Overdose or poisoning</IonSelectOption>
                        <IonSelectOption value="unconsciousness">Unconsciousness</IonSelectOption>
                        <IonSelectOption value="brain">Brain injury</IonSelectOption>
                        <IonSelectOption value="unknown">Unknown and cannot be traced</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonItem id="checkbox">
                    <IonLabel>The victim used drugs<br />and/or alcohol</IonLabel>
                    <IonCheckbox slot="end" color="primary" />
                </IonItem>

                <IonButton id="victim-btn" fill="outline" expand="block" class="ion-padding" size="small" onClick={() => setShowAlert2(true)}>
                    <IonLabel class="ion-padding">The victim is mobile and<br />can arrange transportation</IonLabel>
                </IonButton>

                <IonButton id="victim-btn" fill="outline" expand="block" class="ion-padding" size="small" onClick={() => setShowAlert3(true)}>
                    <IonLabel class="ion-padding">The victim is not mobile<br />and unable to arrange transportation</IonLabel>
                </IonButton>

            </IonContent>

            <IonButton id="emergency-btn-back" expand="block" onClick={backToLogIn}>
                <IonIcon slot="start" icon={arrowBack}></IonIcon>
                    Back to Log In
            </IonButton>

            <IonAlert
                isOpen={showAlert2}
                onDidDismiss={() => setShowAlert2(false)}
                cssClass='my-custom-class'
                header={'Address'}
                subHeader={'4870 West Fork Street, 777 Helena.'}
                message={'Go to this medical post.<br>We are aware of your arrival.'}
                buttons={['Okay']}
            />

            <IonAlert
                isOpen={showAlert3}
                onDidDismiss={() => setShowAlert3(false)}
                cssClass='my-custom-class'
                header={'Address'}
                subHeader={'Please enter a address'}
                inputs={[
                    {
                        name: 'address',
                        type: 'text',
                        placeholder: 'Address'
                    },
                ]}
                buttons={[
                    {
                        text: 'Go to the location of this device',
                        handler: () => {
                            setShowAlert4(true);
                        }
                    },
                    {
                        text: 'I am not on an address',
                        handler: () => {
                            setShowAlert4(true);
                        }
                    }
                ]}
            />

            <IonAlert
                isOpen={showAlert4}
                onDidDismiss={() => setShowAlert4(false)}
                cssClass='my-custom-class'
                header={'Confirmed'}
                message={'Help is on the way please stay where you are.'}
                buttons={['Okay']}
            />

        </IonPage>

    );
};

export default EmergencyForm;