import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

import './FeedItem.styles.scss';
import userAvatar from '../../../assets/images/user1.png';
import slide1 from '../../../assets/images/slide1.jpg';
import slide2 from '../../../assets/images/slide2.jpg';
import slide3 from '../../../assets/images/slide3.jpg';

const FeedItem = () => {
  const [readMore, setReadMore] = React.useState(false);

  const onReadMoreClick = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="cm-feed-item-container box-shadow-2">
      <div className="cm-feed-item-group">
        <p>
          Posted in <Link to="/">Gurgaon Society Watch</Link>
        </p>
      </div>
      <div className="cm-feed-item-owner cm-flex-type-1">
        <img src={userAvatar} alt="Jon Doe" />
        <div className="cm-feed-item-owner-info">
          <h4>Jonathan Doe</h4>
          <p>Yesterday at 16:22</p>
        </div>

        <IconButton aria-label="Post options" className="cm-feed-item-options">
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="cm-feed-item-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta
          fermentum felis, eget tempus elit ultricies vel. Sed accumsan
          pellentesque metus, ut tincidunt augue congue ut. Sed ornare venenatis
          ultricies. Cras sed lectus tristique, interdum tellus sit amet,
          aliquam arcu.
        </p>
        {!readMore ? (
          <span className="cm-read-more cm-pointer" onClick={onReadMoreClick}>
            Read More
          </span>
        ) : null}
        <p>
          Maecenas felis enim, vehicula in rhoncus at, consequat eget augue.
          Suspendisse ut tellus ac sem euismod pellentesque. Fusce a risus
          semper, vestibulum orci eget, sagittis mauris. Suspendisse potenti.
          Fusce sollicitudin laoreet mauris a posuere. Etiam nec laoreet metus.
          Fusce condimentum, metus ac accumsan ultrices, elit arcu congue erat,
          a efficitur velit ex porta massa.
        </p>
        <p>
          Proin quis leo sodales, interdum mauris sed, semper tellus. Vivamus a
          velit commodo, finibus turpis et, consequat felis. Nulla a nisl at mi
          hendrerit consequat. Fusce dignissim sem a dui consequat, quis porta
          magna placerat. Duis sit amet iaculis tortor.
        </p>
        <p>
          Aliquam dictum ante sed luctus consequat. Aliquam sed risus luctus,
          maximus tellus eu, faucibus leo. Mauris ex tellus, laoreet quis varius
          ac, aliquet non leo. Sed at molestie ipsum.
        </p>
        <p>
          Aliquam turpis tortor, porttitor ut ipsum ac, vehicula consectetur
          ipsum. Nullam augue odio, dapibus sed ipsum sed, egestas sagittis
          nunc.
        </p>
      </div>
      <div className="cm-feed-item-images cm-flex-type-1">
        <div className="cm-feed-item-image">
          <img src={slide1} alt="Slide 1" />
        </div>
        <div className="cm-feed-item-image">
          <img src={slide2} alt="Slide 2" />
        </div>
        <div className="cm-feed-item-image">
          <img src={slide3} alt="Slide 3" />
          <p className="cm-flex-type-2">+4</p>
        </div>
      </div>
      <div className="cm-feed-item-actions">
        <Tooltip title="90,356 likes">
          <Button aria-label="Like post">
            <FavoriteBorderIcon />
            <p>90K</p>
          </Button>
        </Tooltip>
        <Tooltip title="42,142 comments">
          <Button aria-label="Comment on post">
            <ChatBubbleOutlineIcon />
            <p>42K</p>
          </Button>
        </Tooltip>
        <Tooltip title="1,556 shares">
          <Button aria-label="Share the post">
            <ShareIcon />
            <p>1K</p>
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default FeedItem;
