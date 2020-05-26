import React from 'react';
import '../scss/style.scss';
export default function CleanerResult(props) {
  return (
    <div className="resultContainer">
      <div className="imageContainer">
        <img
          className="imgResults"
          alt=""
          src="https://media.giphy.com/media/rBPbNvfRB6nVm/source.gif"
          style={{ width: 500, height: 500 }}
        />
      </div>
      <p>
        Congratulations you are an {props.quizResult}! You have literally been
        scrubbing away your tabletops since you heard of this horrible news!
        Keep up the good work, and don't listen to anyone that says "aren't you
        overdoing it just a little bit?"
      </p>
    </div>
  );
}
