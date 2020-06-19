import React from 'react';
import { IonPage, IonContent, IonSlides, IonSlide, IonHeader, IonToolbar, IonAvatar, IonBadge, IonButton, IonIcon, IonLabel, IonTitle, IonGrid, IonCol, IonRow } from '@ionic/react';
import { logOutOutline, readerOutline, bookOutline, helpCircleOutline, chatbubblesOutline } from 'ionicons/icons';
import DateDisplay from '../components/DateDisplay';

import './Medicine.css';

const slideOpts = {
    initialSlide: 0,
    speed: 400
};

const Medicine: React.FC = () => {

    function toEmergency() {
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
                    <IonTitle size="large">My Medicine</IonTitle>
                    <IonButton id="helpBtn" size="small" fill="clear" class="ion-no-padding">Help?</IonButton>
                    <IonButton id="pages-emer" size="small" color="danger" class="ion-padding" onClick={toEmergency}>Emergency</IonButton>

                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>

                <IonSlides pager={true} options={slideOpts} scrollbar={false} className="ion-padding">

                    {/* <SLIDE 1 */}
                    <IonSlide id="slide-container">
                        <div>
                            <img id='meds' src='./assets/img/drugs.png' alt="" />
                        </div>
                        <IonTitle id="slide-head-text" className="ion-padding">Medicine Name</IonTitle>

                        <IonGrid id="slider-grid">
                            <IonRow>

                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon size="large" icon={bookOutline} />
                                            <IonLabel>Package Insert</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>

                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon size="large" icon={readerOutline} />
                                            <IonLabel>prescription</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon icon={chatbubblesOutline} />
                                            <IonLabel>Usage Info</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>

                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon size="large" icon={helpCircleOutline} />
                                            <IonLabel>FAQ</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                        </IonGrid>
                    </IonSlide>
                    {/* <SLIDE 1 */}

                    {/* <SLIDE 2 */}
                    <IonSlide id="slide-container">
                        <div>
                            <img id='meds' src='./assets/img/drugs.png' alt="" />
                        </div>
                        <IonTitle id="slide-head-text" className="ion-padding">Medicine Name</IonTitle>

                        <IonGrid id="slider-grid">
                            <IonRow>

                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon size="large" icon={bookOutline} />
                                            <IonLabel>Package Insert</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>

                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon size="large" icon={readerOutline} />
                                            <IonLabel>prescription</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon icon={chatbubblesOutline} />
                                            <IonLabel>Usage Info</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>

                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon size="large" icon={helpCircleOutline} />
                                            <IonLabel>FAQ</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                        </IonGrid>
                    </IonSlide>
                    {/* <SLIDE 2 */}

                    {/* SLIDE 3 */}
                    <IonSlide id="slide-container">
                        <div>
                            <img id='meds' src='./assets/img/drugs.png' alt="" />
                        </div>
                        <IonTitle id="slide-head-text" className="ion-padding">Medicine Name</IonTitle>

                        <IonGrid id="slider-grid">
                            <IonRow>

                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon size="large" icon={bookOutline} />
                                            <IonLabel>Package Insert</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>

                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon size="large" icon={readerOutline} />
                                            <IonLabel>prescription</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon icon={chatbubblesOutline} />
                                            <IonLabel>Usage Info</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>

                                <IonCol>
                                    <IonButton id="grid-btns">
                                        <div>
                                            <IonIcon size="large" icon={helpCircleOutline} />
                                            <IonLabel>FAQ</IonLabel>
                                        </div>
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                        </IonGrid>
                    </IonSlide>
                    {/* SLIDE 3 */}

                </IonSlides>

            </IonContent>

        </IonPage>
    );
};

export default Medicine;