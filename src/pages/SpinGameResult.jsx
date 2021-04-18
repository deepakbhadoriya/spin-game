import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SpinGameResult = () => {
  const { numOfWin, numOfAttempts } = useSelector((state) => state.spinGame);

  return (
    <div align="center" className="py-5 mx-5 px-5">
      <h2> Result Page</h2>
      <table class="table">
        <tbody>
          <tr>
            <td>Number of Attempts</td>
            <td>{numOfAttempts}</td>
          </tr>
          <tr>
            <td>Number of Wins</td>
            <td>{numOfWin}</td>
          </tr>
          <tr>
            <td>Winning Percentage</td>
            <td>{(numOfWin / numOfAttempts) * 100} %</td>
          </tr>
        </tbody>
      </table>
      <Link to="/spin-game" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default SpinGameResult;
