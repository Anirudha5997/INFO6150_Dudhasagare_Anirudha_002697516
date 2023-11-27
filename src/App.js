import './App.css';
import {BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';

import {getWeatherData} from './api/getWeatherData'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    getWeatherData().then((apiData) => setData(apiData));
  }, [])

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />}/>
          <Route path='/home' element={< Home data={data} />} />
          <Route path='/:day' element={< Details data={data}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
