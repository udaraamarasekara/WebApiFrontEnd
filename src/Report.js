import logo from './logo.svg';
import './App.css';
import Map from './Map';
import {useLoaderData} from "react-router-dom";
function Report() {
    const data =useLoaderData();
    console.log(data);
  return (
    <div >
      {Object.entries(data.data.queryDataArray[0].maxTmpOfDay).map(([key,val])=>{
       return <div> {key} : {val}</div>
      })}
      {Object.entries(data.data.queryDataArray[0].maxHumidityOfDay).map(([key,val])=>{
       return <div> {key} : {val}</div>
      })}
      {Object.entries(data.data.queryDataArray[0].maxAirPressureOfDay).map(([key,val])=>{
       return <div> {key} : {val}</div>
      })}
      {Object.entries(data.data.queryDataArray[0].minTmpOfDay).map(([key,val])=>{
       return <div> {key} : {val}</div>
      })}
      {Object.entries(data.data.queryDataArray[0].minHumidityOfDay).map(([key,val])=>{
       return <div> {key} : {val}</div>
      })}
      {Object.entries(data.data.queryDataArray[0].minAirPressureOfDay).map(([key,val])=>{
       return <div> {key} : {val}</div>
      })}
    </div>
  );
}

export default Report;
