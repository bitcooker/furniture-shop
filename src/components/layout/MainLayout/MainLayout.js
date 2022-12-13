import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../../redux/rwdModeRedux';
import { RWD_MODES } from '../../../redux/initialState';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  const changeRWDMode = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 600) {
      dispatch(changeMode(RWD_MODES.MOBILE));
    } else if (windowWidth < 1200) {
      dispatch(changeMode(RWD_MODES.TABLET));
    } else {
      dispatch(changeMode(RWD_MODES.DESKTOP));
    }
  };

  useEffect(() => {
    changeRWDMode();

    window.addEventListener(`resize`, changeRWDMode);

    return () => window.removeEventListener(`resize`, changeMode);
  }, [changeRWDMode]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
