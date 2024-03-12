import {useState} from "react"
import axios from "axios";

function App() 
{
  const[city,setcity]= useState("")

  const[weather,setweather]= useState("")
  const[Temparature,settemperature]= useState("")
  const[Description,setdescription]= useState("")
  const[error, seterror] = useState("");
  function handlecity(evt)
  {
    setcity(evt.target.value)
  }

function getweather()
{
  var weatherData= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7fb203d62584b9a6bb37a827d2b36134`)
  
  weatherData.then(function(sucesss)
  {
    console.log(sucesss.data)
    setweather(sucesss.data.weather[0].main)
    setdescription(sucesss.data.weather[0].description)
    settemperature(sucesss.data.main.temp)
    seterror("")
  })
  .catch(function(errmsg){
    console.log(errmsg.message)
    seterror(errmsg.message)
    setweather("")
    setdescription("")
    settemperature("")
  })
}

  return (
    <div className='bg-black p-20'>
      <div className='bg-green-400 p-10 rounded-md'>
        <h1 className='text-2xl font-medium'>Weather Report</h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p>I can give you a weather report about your city :)</p>
        )}
        <input onChange={handlecity}type="text" className=" border border-black rounded-md p-1 mt-2" placeholder="Enter city name"></input>
        <button onClick={getweather} className="bg-black text-white p-1 rounded-md mt-2"> get report</button>
      <div className="mt-2">
        <h1><b>Weather:</b>   {weather}</h1>
        <p><b>Temparature(K):</b> {Temparature} </p> 
        <p><b>Description:</b>  {Description}</p>
      </div>
      
      </div>
    </div>
  );
}

export default App;
