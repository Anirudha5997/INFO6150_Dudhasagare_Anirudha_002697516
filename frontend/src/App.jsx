import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//importing components
import Header from './components/header'

//importing pages
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/loginPage/loginPage'
import Jobs from './pages/jobs/jobs'
import Contact from './pages/contact/contact'
import About from './pages/aboutUs/aboutUs'


import { useState, useEffect } from 'react'
import { getJewelleryData } from './api/jewelleryData'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getJewelleryData().then((apiData) => setData(apiData));
}, []);  

  return (
   <div>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>} />
        <Route index path="/home" element={<HomePage data={data?.[0] ?? {}} />} />
        <Route path="/loginPage" element={<LoginPage/>} />
        <Route path="/jobs" element={<Jobs data={data?.[1] ?? {}}/>} />
        <Route path="/aboutus" element={<About data = {data?.[2] ?? {}} />} />
        <Route path="/contact" element={<Contact data={data?.[3] ?? {}}/>} />
      </Routes>
    </Router>
   </div>
     
  );
}

export default App;