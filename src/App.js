import React from 'react';
import {Switch,Route,Link,BrowserRouter as Router,Routes} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import Navbar from './components/Navbar';
import Exchanges from './components/Exchanges';
import Homepage from './components/Homepage';
import News from './components/News';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import './App.css';

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                  <Route  path="/" element={<Homepage/>} />
                  <Route  path="/exchanges" element={<Exchanges/>} />
                  <Route  path="/cryptocurrencies" element={<Cryptocurrencies/>} />
                  <Route  path="/crypto/:coinId" element={<CryptoDetails/>} />
                  <Route  path="/news" element={<News/>} />
              </Routes>
            </div>
          </Layout>
        </div>
        <div className="footer">

        </div>
    </div>
  )
}

export default App;