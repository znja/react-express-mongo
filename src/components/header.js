import React from 'react';
import { Link } from 'react-router';

require('styles/header.scss');

export default function () {
  const links = [
    {path: '/', displayText: 'Set Name'}
  ];

  function headerLinks() {
    return links.map((link, index) =>
      <ul key={index} className="nav-links">
        <Link to={link.path}>{link.displayText}</Link>
      </ul>
    );
  }

  return (
    <div className="header">
      <div className="brand">
        <img src={require('../images/logo3.svg')} alt="" className="logo" />
        <span>A React + Express + MongoDB Starter Kit</span>
      </div>
      <li className="nav">{headerLinks()}</li>
    </div>
  );
}
