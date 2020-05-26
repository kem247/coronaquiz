import React from 'react';
import '../scss/style.scss';
export default function ChefResult(props) {
  return (
    <div className="resultContainer">
      <div className="imageContainer">
        <img
          className="imgResults"
          alt=""
          src="https://media.giphy.com/media/h2HTvVuKVS4daQaVuS/source.gif"
          style={{ width: 500, height: 500 }}
        />
      </div>
      <p>
        Congratulations! You are a {props.quizResult}! I'm sure you have been
        making the most interesting meals with some umm...choice ingredients!
      </p>
    </div>
  );
}
