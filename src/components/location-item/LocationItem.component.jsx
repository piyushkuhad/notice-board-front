import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import './LocationItem.styles.scss';
import Gurgaon from '../../assets/images/gurgaon.jpg';

const LocationItem = ({ data }) => {
  return (
    <div className="cm-location-item-container cm-flex-type-1">
      <img src={Gurgaon} alt={data.locationName} title={data.locationName} />
      <div className="cm-location-item-content">
        <Tooltip title={data.locationName}>
          <h4 className="cm-txt-overflow">{data.locationName}</h4>
        </Tooltip>
        <p>{data.totalMembers} Members</p>
      </div>
      <Button
        variant="contained"
        color={data.isSubscribed ? 'default' : 'primary'}
        onClick={() => {}}
        className="cm-location-item-btn"
      >
        {data.isSubscribed ? 'Subscribed' : 'Subscribe'}
      </Button>
    </div>
  );
};

export default LocationItem;
