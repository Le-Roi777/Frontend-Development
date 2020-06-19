import React from 'react';

import { IonCardContent, IonCard, IonContent, IonTitle, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItemDivider } from '@ionic/react';

interface ContainerProps { }

const HomeCard: React.FC<ContainerProps> = () => {

    return (

        <IonContent fullscreen className="ion-padding">

            <IonTitle size="large">Latest News &amp; Info</IonTitle>

            <IonCard>
                <img src='./assets/img/tips.png' alt="" />

                <IonCardHeader>
                    <IonCardTitle>Health Tips &amp; Vaccines</IonCardTitle>
                    <IonCardSubtitle>Daily Info</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id sagittis nibh. Aliquam eleifend,
                    est eget posuere rhoncus, libero ex tempor felis, vitae euismod augue turpis sed lacus.
                </IonCardContent>
            </IonCard>

            <IonItemDivider></IonItemDivider>

            <IonCard>
                <img src='./assets/img/replace.png' alt="" />

                <IonCardHeader>
                    <IonCardTitle>Replacements</IonCardTitle>
                    <IonCardSubtitle>Daily Info</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id sagittis nibh. Aliquam eleifend,
                    est eget posuere rhoncus, libero ex tempor felis, vitae euismod augue turpis sed lacus.
                </IonCardContent>
            </IonCard>

            <IonItemDivider></IonItemDivider>

            <IonCard>
                <img src='./assets/img/new.png' alt="" />

                <IonCardHeader>
                    <IonCardTitle>New Discoveries</IonCardTitle>
                    <IonCardSubtitle>Daily Info</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id sagittis nibh. Aliquam eleifend,
                    est eget posuere rhoncus, libero ex tempor felis, vitae euismod augue turpis sed lacus.
                </IonCardContent>
            </IonCard>

        </IonContent>
    );
};

export default HomeCard;