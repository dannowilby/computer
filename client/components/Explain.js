import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';

import styles from './styles/Explain.scss';

export default class Explain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='what' className={styles.content}>
        argh
      </div>
    );
  }
}
