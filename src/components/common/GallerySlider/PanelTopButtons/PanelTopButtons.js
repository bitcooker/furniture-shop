import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllTags } from '../../../../redux/tagsRedux';
import styles from './PanelTopButtons.module.scss';

const PanelTopButtons = ({ activeTag, setActiveTag }) => {
  const allTags = useSelector(getAllTags);
  const handleClick = name => {
    setActiveTag(name);
  };

  return (
    <div className={styles.topBtn}>
      <ul>
        {allTags.map(tag => (
          <li
            as='li'
            href=''
            key={tag.id}
            data-name={tag.name}
            onClick={() => handleClick(tag.name)}
            className={activeTag === tag.name && styles.active}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

PanelTopButtons.propTypes = {
  activeTag: PropTypes.node,
  setActiveTag: PropTypes.node,
};

export default PanelTopButtons;
