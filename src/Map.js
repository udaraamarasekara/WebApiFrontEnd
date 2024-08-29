import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import stations from './lk';
import { api } from './api';
import L from 'leaflet'
const Map = () => {


  const [PositionData, setPositionData] = useState([]);

  async function getData()
  { 
    var output = await api.get('/updateCilent');
    console.log(output); 
    setPositionData(output.data);
    
  } 

  function getIcon(_iconSize)
  {
    return L.icon({
      iconUrl:require('./train.jpg'),
      iconSize:_iconSize
    })
  }

  useEffect(() => {
    getData();
     setInterval(() => {
      getData();
    },60 * 1000);
  
  }, []);


  

   
  

  return (
    <div>
      <h2>Sri Lankan Weather Map</h2>
      <MapContainer center={[7.8731, 80.7718]} zoom={7} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((station, index) => (
          <Marker key={index} position={[station.lat,station.lng]}>
            <Popup>
              <div>
                <h3>station:{station.city}</h3>
              </div>
            </Popup>
          </Marker>
        ))}
          {PositionData?.map((loc, index) => (
          <Marker key={index} position={[loc.lat,loc.lng]}>
            <Popup>
              <div>
                <h3>train:{loc.train}</h3>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;