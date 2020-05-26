import React from 'react';
import '../scss/style.scss';
export default function Undetermined() {
  return (
    <div>
      <div className="imageContainer">
        <img
          alt=""
          src="https://media.giphy.com/media/hRxhewwANK0V5n4gq3/source.gif"
          style={{ width: 500, height: 500 }}
        />
      </div>
      <p>
        You're results are undetermined. You are not easily defined! Good job...
      </p>
    </div>
  );
}
