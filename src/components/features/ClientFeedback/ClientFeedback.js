import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './ClientFeedback.module.scss';
import { getFeedback } from '../../../redux/feedbackRedux';
import Swipeable from '../../common/Swipeable/Swipeable';
import Dots from '../../common/Dot/Dots';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const ClientFeedback = () => {
  const feedback = useSelector(state => getFeedback(state));
  const [activeFeedback, setActiveFeedback] = useState(0);

  const handleFeedbackChange = newFeedback => {
    setActiveFeedback(newFeedback);
  };

  const feedbackCount = feedback.length;

  const swipeLeftHandler = () => {
    if (activeFeedback < feedback.length - 1)
      setActiveFeedback(prevState => prevState + 1);
  };
  const swipeRightHandler = () => {
    if (activeFeedback > 0) setActiveFeedback(prevState => prevState - 1);
  };

  return (
    <div className={styles.root}>
      <div className='container mb-5'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col ' + styles.heading}>
              <h3>Client feedback</h3>
            </div>
            <Dots
              changeEvent={handleFeedbackChange}
              activeNumber={activeFeedback}
              dotsNumber={feedbackCount}
            />
          </div>
        </div>
        <Swipeable leftAction={swipeLeftHandler} rightAction={swipeRightHandler}>
          <div className='row'>
            <div className={'col ' + styles.feedback}>
              <p>
                <FontAwesomeIcon icon={faQuoteRight}>x</FontAwesomeIcon>
              </p>
              <p className='px-5'>{feedback[activeFeedback].content}</p>
              <div className={`row m-auto text-center ${styles.client}`}>
                <div className='col p-0'>
                  <img
                    className={styles.image}
                    src={`${process.env.PUBLIC_URL}/images/feedback/${feedback[activeFeedback].photo}`}
                    alt='client avatar'
                  />
                </div>
                <div className='col p-0 text-center align-middle'>
                  <p className='m-0'>{feedback[activeFeedback].name}</p>
                  <p className='m-0 small text-muted'>
                    {feedback[activeFeedback].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

export default ClientFeedback;
