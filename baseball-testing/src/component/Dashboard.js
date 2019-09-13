import React from 'react';
import { resetBallsStrikes, foul } from './CountRules';

export const increaseCount = (val) => val + 1;

export const Dashboard = ({setBalls, setStrikes, balls, strikes}) => {
    
    // const incrementStrike = () => {
    //     setStrikes(increaseCount(strikes));
    // };

    const incrementStrike = () => {
        setStrikes(increaseCount(strikes));
        if(strikes > 1){
            setBalls(resetBallsStrikes());
            setStrikes(resetBallsStrikes());
        }
    };

    const incrementBall = () => {
        setBalls(increaseCount(balls));
        if(balls > 2){
            setStrikes(resetBallsStrikes());
            setBalls(resetBallsStrikes());
        }
    };

    const handleFoul = () => {
        if(strikes < 2)
            setStrikes(foul(strikes));
    }

    const handleHit = () => {
        setBalls(resetBallsStrikes());
        setStrikes(resetBallsStrikes());
    }

    return(
        <div>
            <button onClick={incrementStrike}>strike</button>
            <button onClick={incrementBall} data-testid='ball-button'>ball</button>
            <button onClick={handleFoul}>foul</button>
            <button onClick={handleHit}>hit</button>
        </div>
    )
}