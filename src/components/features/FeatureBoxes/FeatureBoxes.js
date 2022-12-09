import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';
import { Link } from 'react-router-dom';

const FeatureBoxes = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const handleClick1 = () => {
    setIsActive1(current => !current);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  };
  const handleClick2 = () => {
    setIsActive1(false);
    setIsActive2(current => !current);
    setIsActive3(false);
    setIsActive4(false);
  };
  const handleClick3 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(current => !current);
    setIsActive4(false);
  };
  const handleClick4 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(current => !current);
  };
  return (
    <div className={styles.root}>
      <div className='container '>
        <div className='row'>
          <Link to='/' className={`col ${styles.link}`} onClick={handleClick1}>
            <FeatureBox icon={faTruck} active={isActive1}>
              <h5>Free shipping</h5>
              <p>All orders</p>
            </FeatureBox>
          </Link>
          <Link to='/' className={`col ${styles.link}`} onClick={handleClick2}>
            <FeatureBox icon={faHeadphones} active={isActive2}>
              <h5>24/7 customer</h5>
              <p>support</p>
            </FeatureBox>
          </Link>
          <Link to='/' className={`col ${styles.link}`} onClick={handleClick3}>
            <FeatureBox icon={faReplyAll} active={isActive3}>
              <h5>Money back</h5>
              <p>guarantee</p>
            </FeatureBox>
          </Link>
          <Link to='/' className={`col ${styles.link}`} onClick={handleClick4}>
            <FeatureBox icon={faBullhorn} active={isActive4}>
              <h5>Member discount</h5>
              <p>First order</p>
            </FeatureBox>
          </Link>
        </div>
      </div>
    </div>
  );
};
FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
