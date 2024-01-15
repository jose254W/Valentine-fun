import React, { useState, useEffect } from "react";
import Particles from 'react-tsparticles';
import "./valentine.css";
import gif1 from "./images/valentine-quiz-3749_256.gif";
import gif3 from "./images/valentine-quiz-3850_256.gif";
import gif2 from "./images/rose-6870_256.gif";

const Valentine = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [receiveGift, setReceiveGift] = useState(false);
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [buttonClicked, setButtonClicked] = useState(false); // New state variable

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => {
    setShowConfirm(true);
    setButtonClicked(true); // Set the state to true when the button is clicked
  };

  const handleConfirm = (response) => {
    setShowConfirm(false);

    if (response === "yes") {
      setMessage("❤️ I LOVE YOU ❤️\n❤️ GIFT COMING ❤️");
      setReceiveGift(true);
    } else {
      setMessage("❤️ I STILL LOVE YOU ❤️");
      setReceiveGift(true);
    }
  };

  function calculateTimeLeft() {
    const valentinesDay = new Date('2024-02-14T00:00:00');
    const now = new Date();

    const difference = valentinesDay - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="valentine-container">
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
        }}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
      {!buttonClicked && ( // Render the button only if it hasn't been clicked
        <button className="pulse-button" onClick={handleClick}>
          Click me
        </button>
      )}
      {showConfirm && (
        <div className="confirm-box">
          <p>Will you be my Valentine?</p>
          <p>❤️❤️❤️</p>
          <div className="button-container">
            <button onClick={() => handleConfirm("yes")}>Yes</button>
            <button onClick={() => handleConfirm("no")}>No</button>
          </div>
        </div>
      )}
      {message && (
        <div className="message-animation">
          {message}
          {receiveGift && (
            <div className="gift-container">
              {message === "❤️ I LOVE YOU ❤️\n❤️ GIFT COMING ❤️" ? (
                <>
                <img src={gif1} alt="Flower" />
                <img src={gif2} alt="Teddy Bear" /> 
                </>
              ) : (
                <div className="gifter-container" style={{ color: 'red' }}>
                  <img  src={gif3} alt="ted" />
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <div className="countdown-timer">
        <p>Countdown to Valentine's Day:</p>
        <p>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
      </div>
    </div>
  );
}

export default Valentine;
