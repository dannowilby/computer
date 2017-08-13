import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import Slider from 'react-slick';

import Image2 from './styles/static/pc1.png';
import Image1 from './styles/static/phone.png';
import Image3 from './styles/static/communicate.png';

import styles from './styles/Explain.scss';

export default class Explain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Parallax id="what" className={styles.content} strength={400}>
        <h1 className={styles.title}>WHAT IT IS</h1>
        <div className={styles.explainer}>
          <p className={styles.top}>A powerful computer that you can use from afar. Welcome to the future.</p>
          <div className={styles.ie}>
            <img className={styles.image1} src={Image1} />
            <img className={styles.image3} src={Image3} />
            <img className={styles.image2} src={Image2} />
          </div>
        </div>
        <Background className={styles.back}>
          <div>
            largh
          </div>
        </Background>
      </Parallax>
    );
  }
}
