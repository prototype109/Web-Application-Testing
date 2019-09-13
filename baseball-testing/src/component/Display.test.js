import React, { useState } from 'react';
import { render, getByTestId, getByText, fireEvent} from '@testing-library/react'
import Display from './Display';
import { Dashboard, increaseCount } from './Dashboard';
import { resetBallsStrikes, foul } from './CountRules';

test('Display renders without crashing', () => {
    render(<Display />);
});

// test('Check if initial values are 0', () => {
//     const DisplayComp = render(<Display />);
//     //const {getByTestId} = render(<Display />);
//     expect(getByText(DisplayComp, getByTestId('balls'))).toBe(0);
//     expect(getByText(DisplayComp, getByTestId('strikes'))).toBe(0);
// });

// test('Count is incremented when increaseCount is called', () => {
//     const DashboardComp = render(<Display />);
//     const ballsButton = getByTestId(DashboardComp, 'ball-button');
//     console.log(ballsButton);
//     const balls = getByTestId(DashboardComp, 'balls');
//     expect(balls.textContent).toBe(0);
//     fireEvent.click(ballsButton);
//     expect(balls.textContent).toBe(1);
// });

test('Count is incremented when increaseCount is called', () => {
    expect(increaseCount(1)).toBe(2);
});

test('Reset used to set state to 0', () => {
    expect(resetBallsStrikes()).toBe(0);
});

test('Foul increments value when called', () => {
    expect(foul(1)).toBe(2);
});