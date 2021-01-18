import React from 'react';
import CreatePostTrigger from '../../components/create-post/create-post-trigger/CreatePostTrigger.component';
import FeedItem from '../../components/feed/feed-item/FeedItem.component';

import './Feed.styles.scss';

const FeedContainer = () => {
  return (
    <div className="cm-feed-container">
      <CreatePostTrigger />
      <div className="cm-main-feed">
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </div>
    </div>
  );
};

export default FeedContainer;
