/**
 * Group 3
 * Homework 3
 * Grant Bowlds (grant.f.bowlds@vanderbilt.edu) 
 * Donny Carr (donovan.e.carr@vanderbilt.edu) 
 * Justin Condren (justin.l.condren@vanderbilt.edu)
 * Skyler Grandel (skyler.h.grandel@vanderbilt.edu)
 */

import './App.css';
import SignOn from './pages/SignOn.js';
import { Routes, Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import ClientDatabase from './pages/ClientDatabase';
import ClientSurvey from './pages/ClientSurvey';
import DataDashboard from './pages/DataDashboard';
import ClientLanding from './pages/ClientLanding';
import TradeLanding from './pages/TradeLanding';
import Calendar from './pages/Calendar';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthProvider';

/**
 * This is the entry point of the app. It defines all of the routes (or pages) that the user can go to.
 * It basically matches a page with a url/endpoint so that the given page renders when the user visits the given url.
 * @returns page render infomation
 */
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<SignOn/>} />
          <Route path='/client-survey' element={<ClientSurvey/>} />
          <Route path='/client-database' element={<PrivateRoute><ClientDatabase/></PrivateRoute>} />
          <Route path='/data-dashboard' element={<DataDashboard/>} />
          <Route path='/client-landing' element={<ClientLanding/>} />
          <Route path='/trade' element={<TradeLanding/>} />
          <Route path='/calendar' element={<PrivateRoute><Calendar/></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
