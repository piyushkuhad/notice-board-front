import React from 'react';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import darkLogo from '../../../assets/images/NB_logo_dark.png';
import sampleAvatar from '../../../assets/images/worker.png';
import '../Sidebars.styles.scss';
import './UserSidebar.styles.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth.action';

const UserSidebar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-user-profile-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className="cm-user-sidebar-container cm-scroll">
      <div className="cm-sidebar-logo cm-sidebar-col">
        <img src={darkLogo} alt="Notice Board" className="cm-sidebar-logo" />
      </div>
      <div className="cm-sidebar-user-info cm-sidebar-col cm-flex-type-1">
        <Tooltip title="Jon Doe">
          <img src={sampleAvatar} alt="Jon Doe" />
        </Tooltip>
        <div className="cm-sidebar-user-info-content">
          <h4 className="cm-txt-overflow">Jon Doe</h4>
          <Tooltip title="jondoe@example.com">
            <p className="cm-txt-overflow">jondoe@example.com</p>
          </Tooltip>
        </div>
        <IconButton
          aria-label="User options"
          color="primary"
          className="cm-sidebar-user-info-options"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="cm-primary-menu cm-sidebar-col cm-sidebar-menu">
        <ul className="cm-menu-ul">
          <li>
            <Button
              fullWidth
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
              className="active"
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              fullWidth
              component={Link}
              to="/"
              startIcon={<LocationOnIcon />}
            >
              Your Locations
            </Button>
          </li>
          <li>
            <Button
              fullWidth
              component={Link}
              to="/"
              startIcon={<BookmarksIcon />}
            >
              Bookmarks
            </Button>
          </li>
          <li>
            <Button
              fullWidth
              component={Link}
              to="/"
              startIcon={<MessageIcon />}
            >
              Messages
            </Button>
          </li>
        </ul>
      </div>

      <div className="cm-user-groups cm-sidebar-col cm-sidebar-menu">
        <div className="cm-sidebar-menu-header cm-flex-type-1">
          <h3 className="cm-txt-overflow">Your Groups</h3>
          <Link to="/">See all</Link>
        </div>
        <ul className="cm-menu-ul">
          <li>
            <Tooltip title="Gurgaon Society Watch">
              <Button fullWidth component={Link} to="/">
                Gurgaon Society Watch
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="R.K Puram Society Watch">
              <Button fullWidth component={Link} to="/">
                R.K Puram Society Watch
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Shahdara Superbikers Group">
              <Button fullWidth component={Link} to="/">
                Shahdara Superbikers Group
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Dwarka">
              <Button fullWidth component={Link} to="/">
                Dwarka
              </Button>
            </Tooltip>
          </li>
        </ul>
      </div>
      {renderMenu}
    </div>
  );
};

export default UserSidebar;
