import React from 'react';

import SecondarySidebar from '../../components/sidebars/secondary-sidebar/SecondarySidebar.component';
import UserSidebar from '../../components/sidebars/user-sidebar/UserSidebar.component';
import FeedContainer from '../../containers/feed/Feed.container';

const HomePage = () => {
  return (
    <>
      <div className="cm-home-page-container">
        <UserSidebar />
        <FeedContainer />
        <SecondarySidebar />
      </div>
    </>
  );
};

export default HomePage;
