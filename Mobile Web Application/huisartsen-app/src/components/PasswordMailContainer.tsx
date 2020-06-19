import React, { useState } from "react";
import emailjs from "emailjs-com";

import { IonAlert, IonButton, IonToast } from "@ionic/react";

interface ContainerProps { }

const PasswordMailContainer: React.FC<ContainerProps> = () => {

  const [showForgot, setShowAlertForgot] = useState(false);
  const [noEmailEx, setShowToastnoEmail] = useState(false);
  const [noEmailEn, setShowToastEmailEmpty] = useState(false);

  let logoImg = (document.querySelector("img") as HTMLImageElement);
  let textSwap = (document.querySelector("h2") as HTMLImageElement);

  // VALIDATE BEFORE SEND
  function validateSendInput() {

    let emailForPassword = document.getElementById("emailForPassword") as HTMLInputElement;

    if (emailForPassword.value === localStorage.getItem("Email")) {
      sendPassword();
    }

    if (emailForPassword.value === "") {
      setShowToastEmailEmpty(true);
    }

    else if (emailForPassword.value !== localStorage.getItem("Email")) {
      setShowToastnoEmail(true);
      console.log("Create Alert No Such Email");

    }
    // VALIDATE BEFORE SEND

    // SEND EMAIL
    function sendPassword() {

      let storedPassword = window.localStorage.getItem("Password");

      let template_params = {
        "user_email": emailForPassword.value,
        "display_password_msg": storedPassword
      };

      let service_id = "default_service";
      let template_id = "template_mNGRE7Jl";
      let user_id = "user_CLHiXGBL2gvujVSNHFtPd";
      emailjs.send(service_id, template_id, template_params, user_id)

        .then((result) => {
          logoImg.src = "./assets/img/email.png";
          textSwap.innerHTML = "Email Sent!";
          console.log(result.text);
        },

          (error) => {
            logoImg.src = "./assets/img/error.png";
            textSwap.innerHTML = "Oops!";
            console.log(error.text);
          });
    }
    // SEND EMAIL
  };

  return (
    <div>

      <div className="ion-margin-horizontal">
        <IonButton class="forgot" fill="clear" size="small" expand="block" onClick={() => setShowAlertForgot(true)}>Forgot Password?</IonButton>
      </div>

      {/* ENTER EMAIL */}
      <IonAlert
        isOpen={showForgot}
        onDidDismiss={() => setShowAlertForgot(false)}
        cssClass="my-custom-class"
        header={"Please enter your email"}
        subHeader={"We will send you an email with your password"}

        inputs={[

          {
            id: "emailForPassword",
            name: "Email",
            value: "",
            type: "email",
            placeholder: "Email",
          },
        ]}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Canceled");
            }
          },
          {
            text: "Send",
            role: "send",
            handler: () => {
              validateSendInput();
            }
          }
        ]}
      />
      {/* ENTER EMAIL */}

      {/* NO EMAIL EXIST */}
      <IonToast
        isOpen={noEmailEx}
        onDidDismiss={() => setShowToastnoEmail(false)}
        message="Email not registered."
        position="top"
        color="warning"

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
      {/* NO EMAIL EXIST */}

      {/* EMAIL EMPTY */}
      <IonToast
        isOpen={noEmailEn}
        onDidDismiss={() => setShowToastEmailEmpty(false)}
        message="No Email Entered."
        position="top"
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
      {/* EMAIL EMPTY */}

    </div>
  );
};

export default PasswordMailContainer;