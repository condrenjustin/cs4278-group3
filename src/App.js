import './App.css';
import SignOn from './pages/SignOn.js';
import { Routes, Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import ClientDatabase from './pages/ClientDatabase';
import ClientSurvey from './pages/ClientSurvey';
import DataDashboard from './pages/DataDashboard';
import ClientLanding from './pages/ClientLanding';
import TradeLanding from './pages/TradeLanding';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignOn/>} />
        <Route path='/client-survey' element={<ClientSurvey/>} />
        <Route path='/client-database' element={<ClientDatabase/>} />
        <Route path='/data-dashboard' element={<DataDashboard/>} />
        <Route path='/client-landing' element={<ClientLanding/>} />
        <Route path='/trade' element={<TradeLanding/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
