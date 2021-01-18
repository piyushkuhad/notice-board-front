import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './ImageSlider.styles.scss';
import { Link } from 'react-router-dom';

const ImageSlider = ({ images }) => {
  // takes in images as props
  const [index, setIndex] = React.useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <div className="cm-image-slider-container">
        <div className="cm-image-slider-controls">
          <IconButton
            aria-label="Previous Slide"
            onClick={slideLeft}
            color="primary"
            size="small"
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            aria-label="Next Slide"
            onClick={slideRight}
            color="primary"
            size="small"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>

        <div className="cm-flex-type-1 cm-image-slide-wrapper">
          <img src={images[index].imgSrc} alt={images[index].title} />
          <div className="cm-slide-content">
            <h4>{images[index].title}</h4>
            <p>{images[index].locationName}</p>
          </div>
          <Link to="/" className="cm-image-slider-link" />
        </div>
      </div>
    )
  );
};

export default ImageSlider;
