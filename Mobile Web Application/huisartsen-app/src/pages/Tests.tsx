import React, { useState } from 'react';

import { IonPage, IonToolbar, IonTitle, IonHeader, IonAvatar, IonBadge, IonButton, IonIcon, IonLabel, IonContent, IonItem, IonTextarea, IonItemDivider, IonRadio, IonRadioGroup, IonText, IonSelect, IonSelectOption } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';

import DateDisplay from '../components/DateDisplay';

import './Referral.css';

const Tests: React.FC = () => {

    const [examOptions, setexamOptions] = useState<string[]>([]);

    function toEmergency() {
        window.location.href = "/alow/emergency";
    }

    function submittedAlert() {
        alert("Submission Complete");
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
                    <IonTitle size="large">Blood Examination</IonTitle>
                    <IonButton id="helpBtn" size="small" fill="clear" class="ion-no-padding">Help?</IonButton>
                    <IonButton id="pages-emer" size="small" color="danger" class="ion-padding" onClick={toEmergency}>Emergency</IonButton>

                </IonToolbar>

            </IonHeader>

            <IonContent class="ion-padding">

                <div className="imgContainer">
                    <img className='logo' src='./assets/img/clipboard.png' alt="" />
                </div>

                <IonItemDivider>
                    <h5 id="bookAppoint">Blood Examination Information</h5>
                </IonItemDivider>

                <form onSubmit={submittedAlert}>

                    <IonItem >
                        <IonLabel position="floating">Examination Purpose</IonLabel>
                        <IonTextarea id="complaintInput" inputMode="text" enterkeyhint="done" spellCheck="true"></IonTextarea>
                    </IonItem>

                    <div id="selectContainer">
                        <IonLabel class="ion-padding">Examination Options</IonLabel>

                        <IonItem>
                            <IonLabel>Select Options</IonLabel>
                            <IonSelect value={examOptions} multiple={true} cancelText="Cancel" okText="Okay" onIonChange={e => setexamOptions(e.detail.value)}>
                                <IonSelectOption value="bacon">Blood glucose</IonSelectOption>
                                <IonSelectOption value="olives">Calcium blood</IonSelectOption>
                                <IonSelectOption value="xcheese">Cardiac enzymes</IonSelectOption>
                                <IonSelectOption value="peppers">Cholesterol</IonSelectOption>
                                <IonSelectOption value="mushrooms">Protein (CRP)</IonSelectOption>
                                <IonSelectOption value="onions">D-dimer</IonSelectOption>
                                <IonSelectOption value="pepperoni">Folate</IonSelectOption>
                                <IonSelectOption value="pineapple">Full blood count</IonSelectOption>
                                <IonSelectOption value="sausage">HbA1c</IonSelectOption>
                                <IonSelectOption value="Spinach">hCG</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                    </div>


                    <IonRadioGroup>

                        <div id="questionText" className="ion-padding">

                            <IonText>Have you been investigated for this before?</IonText>

                            <IonItem>
                                <IonRadio id="yes" slot="start" value="yes"></IonRadio>
                                <IonLabel>Yes</IonLabel>

                                <IonRadio id="no" slot="end" value="no"></IonRadio>
                                <IonLabel slot="end">No</IonLabel>
                            </IonItem>

                        </div>

                    </IonRadioGroup>

                    <IonRadioGroup>

                        <div id="questionText" className="ion-padding">

                            <IonText>have you been to the doctor for this before?</IonText>

                            <IonItem>
                                <IonRadio id="yes" slot="start" value="yes"></IonRadio>
                                <IonLabel>Yes</IonLabel>

                                <IonRadio id="no" slot="end" value="no"></IonRadio>
                                <IonLabel slot="end">No</IonLabel>
                            </IonItem>

                        </div>

                    </IonRadioGroup>

                    <IonRadioGroup>

                        <div id="questionText" className="ion-padding">

                            <IonText>Would you like to contact the doctor about this in advance?</IonText>

                            <IonItem>
                                <IonRadio id="yes" slot="start" value="yes"></IonRadio>
                                <IonLabel>Yes</IonLabel>

                                <IonRadio id="no" slot="end" value="no"></IonRadio>
                                <IonLabel slot="end">No</IonLabel>
                            </IonItem>

                        </div>

                    </IonRadioGroup>

                    <IonButton id="submitBtn" type="submit" className="ion=padding" expand="block">Submit</IonButton>

                </form>

            </IonContent>

        </IonPage>
    );
};

export default Tests;