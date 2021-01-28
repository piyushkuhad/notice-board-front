import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

import './PopperComp.styles.scss';
import { debounceFn } from '../../utils/helperFn';

const PopperComp = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const popperRef = React.useRef(null);
  const [popperHt, setPopperHt] = React.useState('auto');

  const handleClick = (event) => {
    setAnchorEl((prevState) => {
      if (prevState === null) return event.currentTarget;
      return null;
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  React.useEffect(() => {
    const debouncedCalcHt = debounceFn(function () {
      console.log('open', open);
      if (open) {
        const topPos = popperRef.current ? popperRef.current.offsetTop : 0;
        const ht = window.innerHeight - topPos;
        const currentHt = popperRef.current
          ? popperRef.current.clientHeight
          : 0;

        console.log('currentHt', currentHt, ht);

        if (currentHt > ht) {
          setPopperHt(ht);
        } else {
          setPopperHt('auto');
        }
      }
    }, 1000);

    window.addEventListener('resize', debouncedCalcHt);

    return () => window.removeEventListener('resize', debouncedCalcHt);

    // eslint-disable-next-line
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className="cm-popper-inner">
        <Tooltip title="Messages">
          <IconButton
            aria-label={props.ariaLabel}
            size="medium"
            onClick={handleClick}
          >
            <Badge badgeContent={props.badgeCount} color="secondary">
              {props.icon}
            </Badge>
          </IconButton>
        </Tooltip>
        <Grow in={open}>
          <Paper
            elevation={4}
            className="cm-popper cm-scroll"
            ref={popperRef}
            style={{ height: popperHt }}
          >
            {props.children}
          </Paper>
        </Grow>
      </div>
    </ClickAwayListener>
  );
};

export default PopperComp;