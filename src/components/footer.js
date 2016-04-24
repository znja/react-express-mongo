import React from 'react';
require('styles/footer.scss');

export default function () {
  return (
    <div className="footer">
      <li className="stack">
        <ul>Made With: </ul>
        <ul>
          <img src={require('../images/react-logo.svg')} alt="" />
          <span>( React | React-Router | Redux | React-Redux )</span>
        </ul>
        <ul>
          <img src={require('../images/Sass.svg')} alt="" />
        </ul>
        <ul>
          <img src={require('../images/webpack.svg')} alt="" /> <span> Webpack </span>
        </ul>
        <ul>
          <img src={require('../images/Babel.png')} alt="" />
        </ul>
        <ul>
          <img src={require('../images/mocha-chaijs.png')} alt="" />
        </ul>
      </li>
      <div className="made-with-love">
        <span>
          Developed with <span className="red-heart"> &#9829; </span> by Carlos Corvaia
        </span>
      </div>
    </div>
  );
}
