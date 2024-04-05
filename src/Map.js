import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import districts from './lk';
import { api } from './api';
const Map = () => {


  const [WeatherData, setWeatherData] = useState([]);

  async function getData()
  { 
    const output = await api.get('/');
    await setWeatherData(output.data.response.globalObj);
    
  } 

  useEffect(() => {
    getData();
     setInterval(() => {
      getData();
    }, 5 * 60 * 1000);
  
  }, []);


  

   
  

  return (
    <div>
      <h2>Sri Lankan Weather Map</h2>
      <MapContainer center={[7.8731, 80.7718]} zoom={7} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {districts.map((districtTrue, index) => (
          <Marker key={index} position={[districtTrue.lat,districtTrue.lng]}>
            <Popup>
              <div>
                <h3>{districtTrue.city}</h3>
                <p>Temperature:{WeatherData.find(entry=>entry.district === districtTrue.city)?.temperature} °C</p>
                <p>Humidity:{WeatherData.find(entry=>entry.district === districtTrue.city)?.humidity*100} %</p>
                <p>Air Pressure:{WeatherData.find(entry=>entry.district === districtTrue.city)?.airPressure} hPa</p>

              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;