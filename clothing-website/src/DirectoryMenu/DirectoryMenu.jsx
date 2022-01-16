import React from 'react';

import './DirectoryMenu.styles.scss';
import sections from './Data';
import MenuItem from '../MenuItem/MenuItem';

class DirectoryMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections,
    };
  }

  render() {
    const sections = this.state.sections;
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, size }, index) => {
          return (
            <MenuItem
              key={index}
              title={title}
              imageUrl={imageUrl}
              size={size === 'large' ? size : ''}
            />
          );
        })}
      </div>
    );
  }
}

export default DirectoryMenu;
