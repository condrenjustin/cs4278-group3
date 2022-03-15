import './App.css';
import SignOn from './pages/SignOn.js';
import { Routes, Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import ClientDatabase from './pages/ClientDatabase';
import ClientSurvey from './pages/ClientSurvey';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignOn/>} />
        <Route path='/client-survey' element={<ClientSurvey/>} />
        <Route path='/client-database' element={<ClientDatabase/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
