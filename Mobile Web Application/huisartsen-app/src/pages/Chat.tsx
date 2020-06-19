import React, { useState } from "react";

import { IonPage, IonToolbar, IonTitle, IonHeader, IonAvatar, IonBadge, IonButton, IonIcon, IonLabel, IonContent, IonList, IonItemDivider, IonItem, IonTextarea, IonRefresher, IonRefresherContent, IonToast, IonInput, IonGrid, IonRow, IonCol, IonImg } from "@ionic/react";
import { logOutOutline, send, image, camera } from "ionicons/icons";

import DateDisplay from "../components/DateDisplay";
import { usePhotoGallery } from "../components/CameraT";

import "./Chat.css";

const Chat: React.FC = () => {

    const { photos, takePhoto } = usePhotoGallery();

    const [text, setText] = useState<string>();
    const [demoEnd, setShowToastDemoEnd] = useState(false);
    const [removeImg, setShowToastRemoveImg] = useState(false);

    // let keyBoard = document.getElementById("tabBar") as HTMLElement;
    let messageInput = document.getElementById("messageInput") as HTMLInputElement;
    let messageOne = document.getElementById("displayMessage") as HTMLTextAreaElement;

    let bubbleContainer = document.getElementById("bubble-container") as HTMLElement;
    let bubbleDoc = document.getElementById("bubble-container-doctor") as HTMLElement;

    let replyAnimation = document.getElementById("replyAnimation") as HTMLElement;

    let bubbleTime = new Date().toLocaleTimeString();

    function toEmergency() {
        window.location.href = "/alow/emergency";
    }

    // SHOW MESSAGE INPUT
    function massageValue() {

        if (messageInput.value === "") {
            return null;
        }

        else {

            messageOne.innerHTML = messageInput.value;
            bubbleContainer.style.display = "block";

            setTimeout(replyBubbleAnimation, 1500);

            messageInput.value = "";
        }
    }
    // SHOW MESSAGE INPUT

    // REPLY ANIMATION
    function replyBubbleAnimation() {
        replyAnimation.style.display = "inline-block";
        setTimeout(docReply, 5000);
    }

    function docReply() {

        replyAnimation.style.display = "none";
        bubbleDoc.style.display = "block";

        setShowToastDemoEnd(true);

        messageInput.disabled = true;
    }
    // REPLY ANIMATION


    // REFRESH PAGE
    function refreshPage() {
        window.location.reload(true);
    }
    // REFRESH PAGE

    // IMAGE UPLOAD
    let fileTag = document.getElementById("filetag") as HTMLInputElement;
    let imgNameU = document.getElementById("imgNameU") as HTMLButtonElement;

    function showFileName() {
        let fullPath = fileTag.value; // fetched value = C:\fakepath\fileName.extension
        let fileName = fullPath.replace(/^.*[\\\/]/, "");  // fetch the file name

        imgNameU.innerHTML = fileName;  // display the file name
        imgNameU.style.display = "inline-block";
    }
    // IMAGE UPLOAD

    // REMOVE IMG
    function removeImgF() {
        window.location.href = "/alow/chat";
    }
    // REMOVE IMG

    return (

        <IonPage>

            <IonHeader>

                <IonToolbar id="toolbarContainer" color="primary">

                    <div id="avatarContainer" slot="end" className="ion-padding">

                        <IonAvatar id="user">
                            <img src="./assets/img/user.png" alt="" />
                            <IonBadge id="notifications-badge" color="primary">1</IonBadge>
                        </IonAvatar>

                        <IonButton id="logoutBtn" size="small" fill="clear" slot="secondary" href="/#">
                            <IonIcon slot="end" icon={logOutOutline} />
                            <IonLabel id="logout">Log Out</IonLabel>
                        </IonButton>

                    </div>

                    <DateDisplay />
                    <IonTitle size="large">Chat</IonTitle>
                    <IonButton id="helpBtn" size="small" fill="clear" class="ion-no-padding">Help?</IonButton>
                    <IonButton id="pages-emer" size="small" color="danger" class="ion-padding" onClick={toEmergency}>Emergency</IonButton>

                </IonToolbar>

            </IonHeader>


            <IonContent class="ion-padding">

                <div id="bubble-container">
                    <IonAvatar id="userAvatar">
                        <img src="./assets/img/user.png" alt="" />
                    </IonAvatar>
                    <p id="displayMessage"></p>
                    <small id="bubbleTime">{bubbleTime}</small>
                </div>

                <div id="bubble-container-doctor">
                    <IonAvatar id="docAvatar">
                        <img src="./assets/img/user.png" alt="" />
                    </IonAvatar>
                    <p id="displayMessageDoc">Example chat reply from doctor.</p>
                    <small id="bubbleTime">{bubbleTime}</small>
                </div>

                <div id="replyAnimation" className="chat-bubble">

                    <div className="typing">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>

                <IonToast
                    isOpen={demoEnd}
                    onDidDismiss={() => setShowToastDemoEnd(false)}
                    message="This was a short demo, pull down to refresh..."
                    position="bottom"
                    color="primary"

                    buttons={[
                        {
                            text: "Close",
                            role: "cancel",
                            handler: () => {
                                console.log("Cancel click");
                            }
                        }
                    ]}
                />

                <IonToast
                    isOpen={removeImg}
                    onDidDismiss={() => setShowToastRemoveImg(false)}
                    message="Remove Image?"
                    position="bottom"
                    color="primary"

                    buttons={[
                        {
                            text: "Yes",
                            handler: () => {
                                removeImgF();
                            }
                        },
                        {
                            text: "No",
                            role: "cancel",
                            handler: () => {
                            }
                        }
                    ]}
                />

                <IonRefresher slot="fixed" onIonRefresh={refreshPage} pullFactor={0.5} pullMin={100} pullMax={200}>
                    <IonRefresherContent refreshingSpinner="dots"></IonRefresherContent>
                </IonRefresher>

            </IonContent>

            <IonList id="messageContainer" class="ion-padding">

                <IonItemDivider></IonItemDivider>

                <div>
                    <IonButton id="customButton" size="small">
                        <IonIcon slot="start" icon={image}></IonIcon>
                        <label htmlFor="filetag">Image Upload</label>
                        <input type="file" id="filetag" onChange={showFileName}></input>
                    </IonButton>

                    <IonButton size="small" onClick={() => takePhoto()}>
                        <IonLabel>Take Photo</IonLabel>
                        <IonIcon slot="start" icon={camera}></IonIcon>
                    </IonButton>

                    <div id="intertImg">
                        <IonButton id="imgNameU" size="small" onClick={() => setShowToastRemoveImg(true)}></IonButton>
                    </div>

                    <div id="displayPhoto">
                    {photos.map((photo, index) => (
                        <IonButton size="small" onClick={() => setShowToastRemoveImg(true)} key={index}>{photo.filepath}</IonButton>
                        ))}
                    </div>

                    {/* <IonGrid>
                        <IonRow>
                            {photos.map((photo, index) => (
                                <IonCol size="6" key={index}>
                                    <IonImg src={photo.webviewPath} />
                                </IonCol>
                            ))}
                        </IonRow>
                    </IonGrid> */}

                </div>

                <IonItem>

                    <IonLabel position="floating">Message</IonLabel>

                    <IonTextarea id="messageInput" value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>

                    <IonButton id="sendIcon" size="small" fill="clear" slot="end" onClick={() => massageValue()}>
                        <IonIcon icon={send}></IonIcon>
                    </IonButton>

                </IonItem>

            </IonList>

        </IonPage>
    );

};

export default Chat;