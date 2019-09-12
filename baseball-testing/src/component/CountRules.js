const resetBallsStrikes = (resetBalls, resetStrikes) => {
    resetBalls(0);
    resetStrikes(0);
};

const foul = (strike, currentStrikeCount) => {
    strike(currentStrikeCount + 1);
}