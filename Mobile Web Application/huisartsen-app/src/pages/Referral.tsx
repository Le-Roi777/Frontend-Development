import React, { useState } from 'react';

import { IonPage, IonToolbar, IonTitle, IonHeader, IonAvatar, IonBadge, IonButton, IonIcon, IonLabel, IonContent, IonItem, IonTextarea, IonItemDivider, IonRadio, IonRadioGroup, IonText, IonInput, IonPopover, IonSelectOption, IonSelect } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';

import DateDisplay from '../components/DateDisplay';

import './Referral.css';

const Referral: React.FC = () => {

    const [showPopover, setShowPopover] = useState(false);
    const [specialOptions, setSpecial] = useState<string[]>([]);

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
                    <IonTitle size="large">Referral</IonTitle>
                    <IonButton id="helpBtn" size="small" fill="clear" class="ion-no-padding">Help?</IonButton>
                    <IonButton id="pages-emer" size="small" color="danger" class="ion-padding" onClick={toEmergency}>Emergency</IonButton>

                </IonToolbar>

            </IonHeader>

            <IonContent class="ion-padding">

                <div className="imgContainer">
                    <img className='logo' src='./assets/img/medical-history.png' alt="" />
                </div>

                <IonItemDivider>
                    <h5 id="bookAppoint">Referral Information</h5>
                </IonItemDivider>

                <form onSubmit={submittedAlert}>

                    <IonItem >
                        <IonLabel position="floating">Complaint Description</IonLabel>
                        <IonTextarea id="complaintInput" inputMode="text" enterkeyhint="done" spellCheck="true"></IonTextarea>
                    </IonItem>

                        <div id="selectContainer">
                        <IonLabel class="ion-padding">Desired Specialist</IonLabel>

                        <IonItem>
                            <IonLabel>Select Specialist</IonLabel>
                            <IonSelect value={specialOptions} cancelText="Cancel" okText="Okay" onIonChange={e => setSpecial(e.detail.value)}>
                                <IonSelectOption value="Kurt Cobain">Kurt Cobain</IonSelectOption>
                                <IonSelectOption value="Tony Hawk">Tony Hawk</IonSelectOption>
                                <IonSelectOption value="Tony Stark">Tony Stark</IonSelectOption>
                                <IonSelectOption value="Bruce Banner">Bruce Banner</IonSelectOption>
                                <IonSelectOption value="Bruce Banner">Corey Tylor</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                    </div>

                    <IonRadioGroup>

                        <div id="questionText" className="ion-padding">

                            <IonText>Have you been treated for this complaint before?</IonText>

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

                            <IonText>Have you been to the specialist for this before?</IonText>

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

export default Referral;