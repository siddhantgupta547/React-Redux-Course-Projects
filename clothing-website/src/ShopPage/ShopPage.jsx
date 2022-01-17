import React from 'react';

import SHOP_DATA from './Data';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import './ShopPage.styles.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SHOP_DATA,
    };
  }

  render() {
    const shopData = this.state.SHOP_DATA;
    return (
      <div className="shop-page">
        {shopData.map(({ id, title, items }) => {
          return <CollectionPreview key={id} title={title} items={items} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
