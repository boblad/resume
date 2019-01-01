import React from 'react';
import PropTypes from 'prop-types';
import './Pendulum.css';

const Pendulum = (props) => {

  const renderBalls = () => {
    let ballComponents = []
    let duration = 60;
    let dotCount = 20;
    let osc = 40;

    for (let i = 1; i < dotCount; i++) {
      let ballTime = duration / (dotCount + osc - i);
      ballComponents.push(
        <div className="re-pendulum__ball" style={{animation: `pendulum ${ballTime}s infinite ease-in-out`}}></div>
      );
    }
    return ballComponents;
  }

  return (
    <div className="re-layout">
      <div className="re-pendulum">
        { renderBalls() }
        <div class="res-clear"></div>
      </div>
    </div>
  );
}

Pendulum.defaultProps = {
}

Pendulum.propTypes = {
}

export default Pendulum;