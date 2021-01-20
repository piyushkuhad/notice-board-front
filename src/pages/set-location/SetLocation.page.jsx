import React from 'react';
import { useLocation } from 'react-router-dom';
import MapBoxComp from '../../components/map-comp/MapBoxComp.component';
import SetLocationComp from '../../components/set-location/SetLocationComp.component';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SetLocation = (props) => {
  const query = useQuery();

  const lnglatObj = {
    lng: parseFloat(query.get('lnglat').split(',')[0]),
    lat: parseFloat(query.get('lnglat').split(',')[1]),
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
