import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Tooltip from '@material-ui/core/Tooltip';

import './CreatePostTrigger.styles.scss';
import sampleAvatar from '../../../assets/images/worker.png';

const CreatePostTrigger = () => {
  return (
    <div className="cm-create-post-trigger cm-flex-type-1 box-shadow-2">
      <div className="cm-create-post-trigger-content cm-flex-type-1 ">
        <img src={sampleAvatar} alt="Jon Doe" />
        <p>Hey Jon, what do you want to notify?</p>
      </div>
      <div className="cm-create-post-content-options">
        <Tooltip title="Post Images">
          <IconButton aria-label="Post images">
            <CameraAltIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Write detailed post">
          <IconButton aria-label="Write a post">
            <FullscreenIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default CreatePostTrigger;
