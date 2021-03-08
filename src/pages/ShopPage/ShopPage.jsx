import React from 'react';
import { Component } from 'react';

import SHOP_DATA from './SHOP_DATA';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
