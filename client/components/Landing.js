import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';

import styles from './styles/Landing.scss';
import Image from './styles/static/pc.png';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
      <Parallax className={styles.back} strength={400}>
          <div className={styles.header}>
            <h1 className={styles.left}><a className={styles.link} href=''>VENIENT</a></h1>
            <h2 className={styles.right}><a className={styles.link} href='#about'>ABOUT</a></h2>
            <h2 className={styles.right}><a className={styles.link} href='#products'>PRODUCTS</a></h2>
            <h2 className={styles.right}><a className={styles.link} href='#what'>WHAT IS IT</a></h2>
          </div>
          <Background className={styles.backgr}>
            <div className={styles.para}>
              <img className={styles.image} src={Image} />
            </div>
            <h1 className={styles.hook}>THE SMART COMPUTER</h1>
          </Background>
        </Parallax>
      </div>
    );
  }
}
