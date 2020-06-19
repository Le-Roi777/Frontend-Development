import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { home, chatbubbleEllipses, calendar, people, water, eyedrop } from "ionicons/icons";

/* PAGES IMPORT */
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Appointment from "./pages/Appointment";
import Referral from "./pages/Referral";
import Tests from "./pages/Tests";
import Medicine from "./pages/Medicine";
import Emergency from "./pages/Emergency";
import EmergencyForm from "./pages/EmergencyForm";
/* PAGES IMPORT */

import "./components/bottomtabs.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {

  return (
    <IonApp>

      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>

            {/* LOGIN PAGE */}
            <Route path="/login" component={LogIn} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            {/* LOGIN PAGE */}

            {/* HOME PAGE */}
            <Route path="/:tab(alow/home)" component={Home} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/alow/home" />} />
            {/* HOME PAGE */}

            {/* CHAT PAGE */}
            <Route path="/:tab(alow/chat)" component={Chat} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/alow/chat" />} />
            {/* CHAT PAGE */}

            {/* APPOINTMENT PAGE */}
            <Route path="/:tab(alow/appointment)" component={Appointment} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/alow/appointment" />} />
            {/* APPOINTMENT PAGE */}

            {/* REFERRAL PAGE */}
            <Route path="/:tab(alow/referral)" component={Referral} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/alow/referral" />} />
            {/* REFERRAL PAGE */}

            {/* TESTS PAGE */}
            <Route path="/:tab(alow/tests)" component={Tests} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/alow/tests" />} />
            {/* TESTS PAGE */}

            {/* TESTS PAGE */}
            <Route path="/:tab(alow/medicine)" component={Medicine} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/alow/medicine" />} />
            {/* TESTS PAGE */}

            {/* LOGED IN ROUTES */}
            {/* EMERGENCY PAGE */}
            <Route path="/alow/emergency" component={Emergency} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/alow/emergency" />} />
            {/* EMERGENCY PAGE */}

            {/* EMERGENCYFORM PAGE */}
            <Route path="/alow/emform" component={EmergencyForm} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/alow/emform" />} />
            {/* EMERGENCYFORM PAGE */}
            {/* LOGED IN ROUTES */}

            {/* NOT LOGED IN ROUTES */}
            {/* EMERGENCY PAGE */}
            <Route path="/emergency" component={Emergency} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/emergency" />} />
            {/* EMERGENCY PAGE */}

            {/* EMERGENCYFORM PAGE */}
            <Route path="/emform" component={EmergencyForm} exact={true} />
            <Route exact path="/#" render={() => <Redirect to="/emform" />} />
            {/* EMERGENCYFORM PAGE */}
            {/* NOT LOGED IN ROUTES */}

          </IonRouterOutlet>

          <IonTabBar id="tabBar" slot="bottom">

            <IonTabButton tab="home" href="/alow/home">
              <IonIcon icon={home} />
              <IonLabel>home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="chat" href="/alow/chat">
              <IonIcon icon={chatbubbleEllipses} />
              <IonLabel>chat</IonLabel>
            </IonTabButton>

            <IonTabButton tab="appointment" href="/alow/appointment">
              <IonIcon icon={calendar} />
              <IonLabel>appointment</IonLabel>
            </IonTabButton>

            <IonTabButton tab="referral" href="/alow/referral">
              <IonIcon icon={people} />
              <IonLabel>referral</IonLabel>
            </IonTabButton>

            <IonTabButton tab="blood test" href="/alow/tests">
              <IonIcon icon={water} />
              <IonLabel>blood test</IonLabel>
            </IonTabButton>

            <IonTabButton tab="medicine" href="/alow/medicine">
              <IonIcon icon={eyedrop} />
              <IonLabel>my medicine</IonLabel>
            </IonTabButton>

          </IonTabBar>

        </IonTabs>

      </IonReactRouter>

    </IonApp >
  );
};

document.addEventListener("DOMContentLoaded", function (event) {

  let tabBar = document.getElementById("tabBar") as HTMLElement;
  let backTo = document.getElementById("emergency-btn-back") as HTMLElement;

  if ((window.location.href.indexOf("/alow/emergency")) > -1 || (window.location.href.indexOf("/alow/emform")) > -1) {

    tabBar.style.display = "inline-grid";
    backTo.style.display = "none";
  }
});

export default App;
