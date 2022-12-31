import React, { useState } from 'react';
import styles from './Filters.module.scss';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const Filters = () => {
  const [value, setValue] = useState([10, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.root}>
        <h6>FILTER BY CATEGORIES</h6>
        <div className={styles.line}></div>
        <div className='row mt-3 mx-1'>
          <div className='col d-flex justify-content-start'>
            <span className='text-muted mr-1'>{'>'}</span>
            <p>Furniture</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
        <div className='row m-1'>
          <div className='col d-flex justify-content-start'>
            <span className='text-muted mr-1'>{'>'}</span>
            <p>Sofa</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
        <div className='row m-1'>
          <div className='col d-flex justify-content-start'>
            <span className='text-muted mr-1'>{'>'}</span>
            <p>Chair</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
        <div className='row m-1'>
          <div className='col d-flex justify-content-start'>
            <span className='text-muted mr-1'>{'>'}</span>
            <p>Table</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
        <div className='row m-1'>
          <div className='col d-flex justify-content-start'>
            <span className='text-muted mr-1'>{'>'}</span>
            <p>Bedroom</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
      </div>

      <div>
        <h6>FILTER BY PRICE</h6>
        <div className={styles.line}></div>
        <Box className='m-3'>
          <Slider
            sx={{
              color: 'black',
              '& .MuiSlider-thumb': {
                color: '#d58e32',
              },
            }}
            color='secondary'
            value={value}
            onChange={handleChange}
            valueLabelDisplay='auto'
          />
          <div className='row my-2'>
            <div className='col'>
              <Button variant='small'>FILTER</Button>
            </div>
            <div className='col'>
              <Typography className={styles.priceRange}>
                ${value[0]} - ${value[1]}
              </Typography>
            </div>
          </div>
        </Box>
      </div>

      <div>
        <h6>FILTER BY COLOR</h6>
        <div className={styles.line}></div>
        <div className=' mt-3 mx-1'>
          <div className='col d-flex '>
            <div className={styles.redBox}></div>
            <p>Red</p>
          </div>
          <div className='col d-flex '>
            <div className={styles.blueBox}></div>
            <p>Blue</p>
          </div>
          <div className='col d-flex'>
            <div className={styles.blackBox}></div>
            <p>Black</p>
          </div>
          <div className='col d-flex'>
            <div className={styles.yellowBox}></div>
            <p>Yellow</p>
          </div>
        </div>
      </div>

      <div>
        <h6>FILTER BY SIZE</h6>
        <div className={styles.line}></div>
        <div className='row mt-3 mx-1'>
          <div className='col d-flex justify-content-start'>
            <FontAwesomeIcon className='m-1 ' icon={faCheckSquare}></FontAwesomeIcon>
            <p>S</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
        <div className='row m-1'>
          <div className='col d-flex justify-content-start'>
            <FontAwesomeIcon className='m-1 ' icon={faCheckSquare}></FontAwesomeIcon>
            <p>M</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
        <div className='row m-1'>
          <div className='col d-flex justify-content-start'>
            <FontAwesomeIcon className='m-1 ' icon={faCheckSquare}></FontAwesomeIcon>
            <p>L</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
        <div className='row m-1'>
          <div className='col d-flex justify-content-start'>
            <FontAwesomeIcon className='m-1 ' icon={faCheckSquare}></FontAwesomeIcon>
            <p>XL</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
        <div className='row m-1'>
          <div className='col d-flex justify-content-start'>
            <FontAwesomeIcon className='m-1 ' icon={faCheckSquare}></FontAwesomeIcon>
            <p>XXL</p>
          </div>
          <div className='col d-flex justify-content-end'>
            <div className={styles.dots}>2</div>
          </div>
        </div>
      </div>

      <div>
        <h6>FILTER BY SIZE</h6>
        <div className={styles.line}></div>
        <div className='row mt-3 mx-1'>
          <div className={styles.tags}>
            <FontAwesomeIcon className='mx-1' icon={faTags} />
            Table
          </div>
          <div className={styles.tags}>
            <FontAwesomeIcon className='mx-1' icon={faTags} />
            Chair
          </div>
          <div className={styles.tags}>
            <FontAwesomeIcon className='mx-1' icon={faTags} />
            Sofa
          </div>
          <div className={styles.tags}>
            <FontAwesomeIcon className='mx-1' icon={faTags} />
            Hand Bag
          </div>
        </div>
      </div>
    </>
  );
};
export default Filters;
