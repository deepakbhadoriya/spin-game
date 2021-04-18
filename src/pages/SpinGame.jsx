import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import spinGameActions from '../redux/actions/spinGameActions';

const color1 = '#9f0903';
const color2 = '#251e14';
const winningColor = '#257918';
const data = [
  { option: '0', style: { backgroundColor: color1 } },
  { option: '1', style: { backgroundColor: color2 } },
  { option: '2', style: { backgroundColor: color1 } },
  { option: '3', style: { backgroundColor: winningColor } },
  { option: '4', style: { backgroundColor: color1 } },
  { option: '5', style: { backgroundColor: color2 } },
  { option: '6', style: { backgroundColor: color1 } },
  { option: '7', style: { backgroundColor: color2 } },
  { option: '8', style: { backgroundColor: color1 } },
  { option: '9', style: { backgroundColor: color2 } },
];

const SpinGame = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { numOfWin, numOfAttempts } = useSelector((state) => state.spinGame);

  const [startSpin, setStartSpin] = useState(false);
  const [userPrizeNum, setUserPrizeNum] = useState(null);
  const [redirectionTimer, setRedirectionTimer] = useState(5);
  const [won, setWon] = useState(false);

  const handleSpinStop = (data) => {
    setStartSpin(false);
    if (userPrizeNum === 3) {
      setWon('You Won!!!!');
      dispatch(spinGameActions.setWin(numOfWin + 1));
    } else {
      setWon('Better Luck next time');
    }
    if (numOfAttempts === 10) {
      setInterval(() => setRedirectionTimer((prevState) => prevState - 1), 1000);
      setTimeout(() => history.push('/spin-game-result'), 5000);
    }
  };

  const handleSpinStart = () => {
    setWon(false);
    setStartSpin(true);
    const newPrizeNum = Math.floor(Math.random() * data.length);
    setUserPrizeNum(newPrizeNum);
    dispatch(spinGameActions.setAttempts(numOfAttempts + 1));
  };

  return (
    <div align="center" className="py-5">
      <h3>Number of Attempts : {numOfAttempts}</h3>
      <h3>Number of won : {numOfWin}</h3>
      <Wheel
        mustStartSpinning={startSpin}
        prizeNumber={userPrizeNum}
        onStopSpinning={handleSpinStop}
        data={data}
        textColors={['#ffffff']}
        outerBorderColor="#000"
        outerBorderWidth="5"
        innerBorderColor="#f4b28f"
      />
      <br />
      <button
        onClick={handleSpinStart}
        className="btn btn-primary"
        disabled={startSpin || numOfAttempts === 10}
      >
        Spin
      </button>
      <h1>{won}</h1>
      <h3>
        {numOfAttempts === 10 &&
          !startSpin &&
          `Redirecting to Result page in ${redirectionTimer} seconds`}
      </h3>
    </div>
  );
};

export default SpinGame;
