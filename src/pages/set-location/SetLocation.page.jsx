import React from 'react';
import { useLocation } from 'react-router-dom';
import MapBoxComp from '../../components/map-comp/MapBoxComp.component';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SetLocation = (props) => {
  const query = useQuery();

  const lnglatObj = {
    lng: query.get('lnglat')
      ? parseFloat(query.get('lnglat').split(',')[0])
      : null,
    lat: query.get('lnglat')
      ? parseFloat(query.get('lnglat').split(',')[1])
      : null,
  };

  //console.log('lnglatObj', lnglatObj);

  return (
    <div className="cm-set-location-container">
      {/* <SetLocationComp /> */}
      <MapBoxComp locObj={lnglatObj} />
    </div>
  );
};

export default SetLocation;
