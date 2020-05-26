import React from 'react';
import '../scss/style.scss';
export default function HoarderResult(props) {
  return (
    <div className="resultContainer">
      <div className="imageContainer">
        <img
          className="imgResults"
          alt=""
          src="https://media.giphy.com/media/1vZ8VKKyEiBeVrVYO7/source.gif"
          style={{ width: 500, height: 500 }}
        />
      </div>
      <p>
        Congrats, you're a {props.quizResult}! You don't have to worry about any
        necessities for the next few months. You probably have a bunker and a
        six month supply of emergency food! The rest of us are just trying to
        catch up!
      </p>
    </div>
  );
}
