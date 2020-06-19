import React, { useState } from "react";

import { IonPage, IonHeader, IonToolbar, IonAvatar, IonBadge, IonButton, IonIcon, IonLabel, IonTitle, IonContent, IonItem, IonDatetime, IonRow, IonCol, IonGrid, IonAlert, IonRadioGroup, IonRadio, IonItemDivider } from "@ionic/react";
import { logOutOutline } from "ionicons/icons";

import DateDisplay from "../components/DateDisplay";

import "./Appointment.css";

const Appointment: React.FC = () => {

    const [selectedDate, setSelectedDate] = useState<string>();
    const [showAlertC, setShowAlertC] = useState(false);
    const [selected, setSelected] = useState<string>("Normal Appointment");
;
    let appointText = document.getElementById("appointText") as HTMLElement;
    let cancelBtn = document.getElementById("cancel-btn") as HTMLElement;
    let itemDiv = document.getElementById("insertItem") as HTMLElement;
    let itemAdd = document.createElement("ion-item");
    itemAdd.id = "itemAdd";


    let ColContainer = document.getElementById("col-container") as HTMLElement;

    function toEmergency() {
        window.location.href = "/alow/emergency";
    }

    function confirmation() {

        itemDiv.style.display = "block";
        appointText.style.display = "block";
        cancelBtn.style.display = "inline-block";

    }
    function cancelAppoint () {
        window.location.href = "/alow/appointment";
    }

    function addItem(appointSelect) {

        setShowAlertC(true);

        itemAdd.innerHTML =
            appointSelect.day.text + " " +
            appointSelect.month.text + " " +
            appointSelect.hour.text + ":" +
            appointSelect.minute.text;

        itemDiv.appendChild(itemAdd);
    }

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
                    <IonTitle size="large">Appointment</IonTitle>
                    <IonButton id="helpBtn" size="small" fill="clear" class="ion-no-padding">Help?</IonButton>
                    <IonButton id="pages-emer" size="small" color="danger" class="ion-padding" onClick={toEmergency}>Emergency</IonButton>

                </IonToolbar>

            </IonHeader>

            <IonItemDivider>
                <h5 id="bookAppoint">Book Appointment</h5>
            </IonItemDivider>

            <IonContent fullscreen className="ion-padding">

                <IonRadioGroup id="radioBtns" value={selected} onIonChange={e => setSelected(e.detail.value)}>

                    <IonItem>
                        <IonLabel>Normal Appointment</IonLabel>
                        <IonRadio slot="start" value="Normal Appointment" />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Short Appointment</IonLabel>
                        <IonRadio slot="start" value="Quick Appointment" />
                    </IonItem>

                </IonRadioGroup>

                <IonItem id="dateHeadH">
                    <h3>June 2020</h3>
                </IonItem>

                <IonGrid id="col-container">

                    <IonRow id="daysContainer">
                        <IonCol id="daysWeek">Mo</IonCol>

                        <IonCol id="daysWeek">Tu</IonCol>

                        <IonCol id="daysWeek">We</IonCol>

                        <IonCol id="daysWeek">Tu</IonCol>

                        <IonCol id="daysWeek">Fr</IonCol>

                        <IonCol id="daysWeek">Sa</IonCol>

                        <IonCol id="daysWeek">Su</IonCol>
                    </IonRow>


                    <IonRow id="days">
                        <IonCol id="Available">1
                            <IonDatetime pickerOptions={{
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: () => console.log("Canceled!")

                                    }, {
                                        text: "Select",
                                        role: "save",
                                        handler: (data: any) => {

                                            let appointSelect = data;
                                            addItem(appointSelect);

                                        }
                                    }
                                ]
                            }}
                                displayFormat="DDD MMM HH:mm"
                                dayValues="1"
                                monthValues="6"
                                hourValues="08,09,10,11,12,13,14,15,16"
                                minuteValues="0,15,30,45"
                                value={selectedDate}>

                            </IonDatetime>

                        </IonCol>

                        <IonCol id="Available">2
                        <IonDatetime pickerOptions={{
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: () => console.log("Canceled!")

                                    }, {
                                        text: "Select",
                                        role: "save",
                                        handler: (data: any) => {

                                            let appointSelect = data;
                                            addItem(appointSelect);

                                        }
                                    }
                                ]
                            }}
                                displayFormat="DDD MMM HH:mm"
                                dayValues="2"
                                monthValues="6"
                                hourValues="08,09,10,11,12,13,14,15,16"
                                minuteValues="0,15,30,45"
                                value={selectedDate}>

                            </IonDatetime>
                        </IonCol>

                        <IonCol id="Available">3
                        <IonDatetime pickerOptions={{
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: () => console.log("Canceled!")

                                    }, {
                                        text: "Select",
                                        role: "save",
                                        handler: (data: any) => {

                                            let appointSelect = data;
                                            addItem(appointSelect);

                                        }
                                    }
                                ]
                            }}
                                displayFormat="DDD MMM HH:mm"
                                dayValues="3"
                                monthValues="6"
                                hourValues="08,09,10,11,12,13,14,15,16"
                                minuteValues="0,15,30,45"
                                value={selectedDate}>

                            </IonDatetime>
                        </IonCol>

                        <IonCol id="Available">4
                        <IonDatetime pickerOptions={{
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: () => console.log("Canceled!")

                                    }, {
                                        text: "Select",
                                        role: "save",
                                        handler: (data: any) => {

                                            let appointSelect = data;
                                            addItem(appointSelect);

                                        }
                                    }
                                ]
                            }}
                                displayFormat="DDD MMM HH:mm"
                                dayValues="4"
                                monthValues="6"
                                hourValues="08,09,10,11,12,13,14,15,16"
                                minuteValues="0,15,30,45"
                                value={selectedDate}>

                            </IonDatetime>
                        </IonCol>

                        <IonCol id="Available">5
                        <IonDatetime pickerOptions={{
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: () => console.log("Canceled!")

                                    }, {
                                        text: "Select",
                                        role: "save",
                                        handler: (data: any) => {

                                            let appointSelect = data;
                                            addItem(appointSelect);

                                        }
                                    }
                                ]
                            }}
                                displayFormat="DDD MMM HH:mm"
                                dayValues="5"
                                monthValues="6"
                                hourValues="08,09,10,11,12,13,14,15,16"
                                minuteValues="0,15,30,45"
                                value={selectedDate}>

                            </IonDatetime>
                        </IonCol>

                        <IonCol id="weekend">6</IonCol>

                        <IonCol id="weekend">7</IonCol>
                    </IonRow>

                    <IonRow id="days">
                        <IonCol>8
                        </IonCol>

                        <IonCol>9
                        </IonCol>

                        <IonCol>10
                        </IonCol>

                        <IonCol>11
                        </IonCol>

                        <IonCol>12
                        </IonCol>

                        <IonCol id="weekend">13</IonCol>

                        <IonCol id="weekend">14</IonCol>
                    </IonRow>

                    <IonRow id="days">
                        <IonCol>15</IonCol>

                        <IonCol>16</IonCol>

                        <IonCol>17</IonCol>

                        <IonCol>18</IonCol>

                        <IonCol>19</IonCol>

                        <IonCol id="weekend">20</IonCol>

                        <IonCol id="weekend">21</IonCol>
                    </IonRow>

                    <IonRow id="days">
                        <IonCol>22</IonCol>

                        <IonCol>23</IonCol>

                        <IonCol>24</IonCol>

                        <IonCol>25</IonCol>

                        <IonCol>26</IonCol>

                        <IonCol id="weekend">27</IonCol>

                        <IonCol id="weekend">28</IonCol>
                    </IonRow>

                    <IonRow id="days">
                        <IonCol>29</IonCol>

                        <IonCol>30</IonCol>

                        <IonCol id="weekend"></IonCol>

                        <IonCol id="weekend"></IonCol>

                        <IonCol id="weekend"></IonCol>

                        <IonCol id="weekend"></IonCol>

                        <IonCol id="weekend"></IonCol>
                    </IonRow>

                </IonGrid>

                <IonAlert
                    isOpen={showAlertC}
                    onDidDismiss={() => setShowAlertC(false)}
                    cssClass="my-custom-class"
                    header={"Confirm this appointment"}
                    message={"Short complaint description"}
                    inputs={[
                        {
                            id: "complaintInput",
                            type: "text",
                            placeholder: "Complaint"
                        }
                    ]}

                    buttons={[
                        {
                            text: "Cancel",
                            role: "cancel",
                            cssClass: "secondary",
                            handler: removeItem => {
                                let itemRemove = document.getElementById("itemAdd") as HTMLElement;
                                itemRemove.remove();
                            }
                        },
                        {
                            text: "Confirm",
                            handler: () => {
                                confirmation();
                            }
                        }
                    ]}
                />

                <IonItem id="appointText">
                    <h4>Appointment on:</h4>
                </IonItem>

                <div id="insertItem"></div>

                <IonButton id="cancel-btn" size="small" class="ion-padding" onClick={cancelAppoint}>Cancel Appointment</IonButton>

            </IonContent>

        </IonPage>

    );

};

export default Appointment;