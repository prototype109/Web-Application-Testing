//resetBalls is a state function used to reset the current ball count for the at-bat player
//resetStrikes is a state function used to reset the current strike count for the at-bat player

export const resetBallsStrikes = (resetBalls, resetStrikes) => {
    resetBalls(0);
    resetStrikes(0);
};

//strike is the state function that will be used to increment currentStrikeCount
//currentStrikeCount is the count of the current strikes that the at-bat has
export const foul = (strike, currentStrikeCount) => {
    strike(currentStrikeCount + 1);
}