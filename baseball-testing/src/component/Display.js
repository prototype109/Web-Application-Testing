import React, { useState } from 'react';
import Dashboard from './Dashboard';

export const Display = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    return(
        <div>
            <h1>balls: </h1>
            <p>{balls}</p>
            <h1>strikes: </h1>
            <p>{strikes}</p>
            <Dashboard setBalls={setBalls} 
                       setStrikes={setStrikes} 
                       balls={balls} 
                       strikes={strikes} />
        </div>
    )
}