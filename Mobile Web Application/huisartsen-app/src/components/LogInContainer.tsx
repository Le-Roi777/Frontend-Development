import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { IonList, IonItem, IonLabel, IonInput, IonButton, IonAlert, IonIcon } from '@ionic/react';

import './LogInContainer.css';
import { alert } from 'ionicons/icons';

interface ContainerProps { }

const LogInContainer: React.FC<ContainerProps> = () => {

  const history = useHistory();

  // SHOW HIDE PASSWORD
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);

    const toggleEye = (document.getElementById("eyeIcon") as HTMLImageElement);

    toggleEye.classList.toggle("eyeSlash");
  };
  // SHOW HIDE PASSWORD

  // HANDLE FORM SUBMIT
  let logoImg = (document.querySelector("img") as HTMLImageElement);
  let textSwap = (document.querySelector("h2") as HTMLImageElement);

  let emailInput = (document.getElementById("emailInput") as HTMLInputElement);
  let passwordInput = (document.getElementById("passwordInput") as HTMLInputElement);

  let signInBtn = document.getElementById("signInBtn") as HTMLButtonElement;
  let signUpBtn = document.getElementById("signUpBtn") as HTMLButtonElement;

  const [showAlertPassword, setShowAlertPassword] = useState(false);
  const { register, handleSubmit, reset, errors } = useForm();

  let storedEmail = window.localStorage.getItem("Email");
  let storedPassword = window.localStorage.getItem("Password");

  // HANDLE FORM SUBMIT SCRIPT
  const onSubmit = data => {

    if (emailInput.value === storedEmail && passwordInput.value === storedPassword) {
      // history.push("/alow/home");
      window.location.href = "/alow/home";
    }

    else if (emailInput.value === storedEmail && passwordInput.value !== storedPassword) {
      setShowAlertPassword(true);
    }

    else {
      window.localStorage.setItem("Email", data.Email);
      window.localStorage.setItem('Password', data.Password);

      logoImg.src = './assets/img/tick.png';
      textSwap.innerHTML = "Sign Up Successful!"

      signUpBtn.disabled = true;
      signInBtn.disabled = false;

      reset({ Email: "", Password: "" });
    }
  }

  // VALIDATE EMAIL INPUT
  function validateEmail(data) {

    if (emailInput.value === storedEmail) {
      signUpBtn.disabled = true;
      signInBtn.disabled = false;
    }
    else if (emailInput.value !== storedEmail) {
      signInBtn.disabled = true;
      signUpBtn.disabled = false;
    }
  }
  // VALIDATE EMAIL INPUT
  // HANDLE FORM SUBMIT

  // TO EMERGENCY SCREEN
  function toEmergency() {
    history.push("/emergency");
  }
  // TO EMERGENCY SCREEN

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <IonList lines="full" class="ion-no-margin ion-padding">

        <IonItem>
          <IonLabel id="emailLabel" position="stacked">Email</IonLabel>
          <IonInput id="emailInput" type="email" name="Email" ref={register({ required: true, pattern: /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/ })} onInput={() => validateEmail(onSubmit)} clearInput></IonInput>
          {errors.Email && <small>Email Required</small>}
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>

          <IonInput id="passwordInput" name="Password"
            ref={register({ required: true, minLength: 6, maxLength: 6 })}
            type={passwordShown ? "text" : "password"}>
          </IonInput>

          <i id="eyeIcon" onClick={togglePasswordVisiblity} className="eye"></i>

          {errors.Password && <small>Use 6 Characters</small>}

        </IonItem>

      </IonList>

      <div>
        <IonButton id="signInBtn" expand="block" type="submit" class="ion-no-margin">Sign In</IonButton>
      </div>

      <div>
        <IonButton id="signUpBtn" expand="block" type="submit" class="ion-no-margin">Sign Up</IonButton>
      </div>

      <div>
        <IonButton id="emergencyBtn" expand="block" class="ion-no-margin" color="danger" onClick={toEmergency}>
          <IonIcon slot="end" icon={alert} />
          Emergency
          </IonButton>
      </div>

      <IonAlert
        isOpen={showAlertPassword}
        onDidDismiss={() => setShowAlertPassword(false)}
        cssClass='my-custom-class'
        header={'Wrong Password'}
        subHeader={'Wrong Email and Password Combination'}
        message={'Plese enter correct password.'}
        buttons={['OK']}
      />

    </form>
  );
};

export default LogInContainer;

