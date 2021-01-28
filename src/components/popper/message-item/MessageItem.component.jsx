import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { calcTimeAgo } from '../../../utils/helperFn';

const MessageItem = (props) => {
  return (
    <div className="cm-messages-item-container cm-popper-item-container cm-flex-type-1">
      <div className="cm-avatar">
        {props.avatar ? (
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        ) : (
          <Avatar>P</Avatar>
        )}
      </div>
      <div className="cm-content">
        <h4 className="cm-txt-overflow cm-flex-type-1">Jon Doe</h4>
        <p className="cm-txt-overflow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          gravida neque et lorem scelerisque, ac pulvinar nisi iaculis.
        </p>
        <span className="cm-time">{calcTimeAgo('202101251640')}</span>
      </div>
    </div>
  );
};

export default MessageItem;
