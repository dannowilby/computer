import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Product.scss';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='products' className={styles.content}>
        
      </div>
    );
  }
}
