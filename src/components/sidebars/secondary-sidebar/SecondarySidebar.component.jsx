import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import MessageIcon from '@material-ui/icons/Message';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExploreIcon from '@material-ui/icons/Explore';
import Drawer from '@material-ui/core/Drawer';

import '../Sidebars.styles.scss';
import './SecondarySidebar.styles.scss';
import SearchBox from '../../search-box/SearchBox.component';
import LocationItem from '../../location-item/LocationItem.component';
import ImageSlider from '../../image-slider/ImageSlider.component';
import sampleAvatar from '../../../assets/images/worker.png';
import slide1 from '../../../assets/images/slide1.jpg';
import slide2 from '../../../assets/images/slide2.jpg';
import slide3 from '../../../assets/images/slide3.jpg';
import slide4 from '../../../assets/images/slide4.jpg';
import SetLocationComp from '../../set-location/SetLocationComp.component';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const initialLocations = [
  {
    locationName: 'Gurgaon Society Watch',
    totalMembers: '5.6M',
    isSubscribed: false,
    imgSrc: slide3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    locationName: 'R.K Puram Society Watch',
    totalMembers: '10M',
    isSubscribed: true,
    imgSrc: slide2,
    title: 'Dolor sit amet, consectetur adipiscing elit.',
  },
  {
    locationName: 'Shahdara Superbikers Group',
    totalMembers: '500',
    isSubscribed: false,
    imgSrc: slide1,
    title: 'Lorem ipsum dolor sit amet, elit.',
  },
  {
    locationName: 'Dwarka',
    totalMembers: '4.8M',
    isSubscribed: false,
    imgSrc: slide4,
    title: 'Lorem ipsum, consectetur adipiscing elit.',
  },
];

const SecondarySidebar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (val) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(val);
  };

  return (
    <div className="cm-secondary-sidebar-container cm-scroll">
      <div className="cm-secondary-sidebar-top-nav cm-flex-type-1 cm-sidebar-col">
        <IconButton style={{ padding: 0 }}>
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            <Avatar alt="Jon Doe" src={sampleAvatar} />
          </StyledBadge>
        </IconButton>
        <div className="cm-inner-wrapper cm-flex-type-1">
          <Tooltip title="Messages">
            <IconButton aria-label="Messages" size="medium">
              <Badge badgeContent={90} color="secondary">
                <MessageIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton aria-label="Notifications" size="medium">
              <Badge badgeContent={16} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Dark Mode">
            <IconButton aria-label="Enable dark mode" size="medium">
              <Brightness4Icon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="cm-secondary-sidebar-header cm-sidebar-col cm-flex-type-1">
        <SearchBox />
        <Tooltip title="Advanced Search">
          <IconButton
            //component={Link} to="/set-location"
            onClick={toggleDrawer(true)}
            size="medium"
          >
            <ExploreIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="cm-featured-posts cm-sidebar-col cm-sidebar-menu">
        <div className="cm-sidebar-menu-header cm-flex-type-1">
          <h3 className="cm-txt-overflow">Featured</h3>
        </div>
        <ImageSlider images={initialLocations} />
      </div>
      <div className="cm-suggested-groups cm-sidebar-col cm-sidebar-menu">
        <div className="cm-sidebar-menu-header cm-flex-type-1">
          <h3 className="cm-txt-overflow">Suggested Locations</h3>
          <Link to="/">See all</Link>
        </div>
        <ul className="cm-menu-ul">
          {initialLocations.map((el) => (
            <li>
              <LocationItem data={el} key={el.name} />
            </li>
          ))}
        </ul>
      </div>
      <Drawer anchor={'right'} open={drawerOpen} onClose={toggleDrawer(false)}>
        <SetLocationComp closeHandler={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default SecondarySidebar;
