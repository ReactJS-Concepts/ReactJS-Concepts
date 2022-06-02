
import './App.css';

import SideNav from "./Code/Extra_Components/SideNav";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div 
      style={{
        backgroundColor: '#d7dfee', position: 'fixed', overflow: 'auto', height: '100%', width: '100%',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}
    >
      <Router>
        <SideNav />
      </Router>
    </div>
  );
}

export default App;
