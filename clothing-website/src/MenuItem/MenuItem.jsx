import React from 'react';

import './MenuItem.styles.scss';

function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
