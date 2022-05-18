import logo from './Resources/Images/LearnReact.gif';
import './App.css';

import AppContainer from "./Code/AppContainer";

function App() {
  return (
    <div 
      style={{
        backgroundColor: '#d7dfee', position: 'fixed', overflow: 'auto', height: '100%', width: '100%',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}
    >
      <AppContainer/>
    </div>
  );
}

export default App;
