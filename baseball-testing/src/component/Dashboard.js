import React from 'react';
import { resetBallsStrikes, foul } from './CountRules';

export const increaseCount = (val) => val + 1;

export const Dashboard = ({setBalls, setStrikes, balls, strikes}) => {
    
    export const incrementStrike = () => {
        setStrikes(increaseCount(strikes));
    };

    export const incrementBall = () => {
        setBalls(increaseCount(balls));
    };

    export const handleFoul = () => {
        if(strikes < 3)
            foul(setStrikes, strikes);
    }

    return(
        <div>
            <button onClick={incrementStrike}>strike</button>
            <button onClick={incrementBall}>ball</button>
            <button onClick={handleFoul}>foul</button>
            <button>hit</button>
        </div>
    )
}