import React from 'react';
import { IonInput } from '@ionic/react';

interface ContainerProps { }

const DateDisplay: React.FC<ContainerProps> = () => {

    const setD = new Date().toDateString();

    return (
        <div id="dateContainer" className="container">
            <IonInput id="dateHead" value={setD} readonly class="ion-no-padding"></IonInput>
        </div>
    );
}

export default DateDisplay;