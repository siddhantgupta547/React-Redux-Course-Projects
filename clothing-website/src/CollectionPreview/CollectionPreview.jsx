import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.styles.scss';

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1>{title}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...otherprops }) => {
          return <CollectionItem key={id} {...otherprops} />;
        })}
      </div>
    </div>
  );
}

export default CollectionPreview;
