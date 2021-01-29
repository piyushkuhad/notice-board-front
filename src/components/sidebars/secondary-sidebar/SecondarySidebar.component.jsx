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
import SetLocationComp from '../../set-location/SetLocationComp.component';
import { initialLocations } from '../../../assets/data/demoData';
import { useSelector } from 'react-redux';
import PopperComp from '../../popper/PopperComp.component';
import NotificationItem from '../../popper/notification-item/NotificationItem.component';
import MessageItem from '../../popper/message-item/MessageItem.component';

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

const SecondarySidebar = () => {
  const dialogState = useSelector((state) => state.app.dialog);
  const [badgeCount, setBadgeCount] = React.useState({
    msg: 90,
    notification: 16,
  });

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
          {/* <Tooltip title="Messages">
            <IconButton ref={msgDrawerRef} aria-label="Messages" size="medium">
              <Badge badgeContent={90} color="secondary">
                <MessageIcon />
              </Badge>
            </IconButton>
          </Tooltip> */}
          {/* Message Popper */}
          <PopperComp
            badgeCount={badgeCount.msg}
            ariaLabel="Messages"
            icon={<MessageIcon />}
          >
            <MessageItem />
            <MessageItem />
          </PopperComp>
          <PopperComp
            badgeCount={badgeCount.notification}
            ariaLabel="Notifications"
            icon={<NotificationsIcon />}
          >
            <NotificationItem />
            <NotificationItem />
          </PopperComp>
          {/* <Tooltip title="Notifications">
            <IconButton aria-label="Notifications" size="medium">
              <Badge badgeContent={16} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip> */}
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
            <li key={el.locationName}>
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
