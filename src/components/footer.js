import React from 'react';
require('styles/footer.scss');

export default function () {
  return (
    <div className="footer">
      <div className="made-with-love">
        <span>
          Developed with <span className="red-heart"> &#9829; </span> by Carlos Corvaia
        </span>
      </div>
    </div>
  );
}
