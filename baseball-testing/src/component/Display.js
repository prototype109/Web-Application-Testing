import React, { useState } from 'react';
import { Dashboard } from './Dashboard';

export default() => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    return(
        <div>
            <h1>balls: </h1>
            <p data-testid='balls'>{balls}</p>
            <h1>strikes: </h1>
            <p data-testid='strikes'>{strikes}</p>
            <Dashboard setBalls={setBalls} 
                       setStrikes={setStrikes} 
                       balls={balls} 
                       strikes={strikes} />
        </div>
    )
}