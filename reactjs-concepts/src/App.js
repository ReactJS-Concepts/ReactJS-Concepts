import logo from './Resources/Images/LearnReact.gif';
import './App.css';

import AppContainer from "./Code/AppContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{width: '50%', height: 'auto'}} src={logo} alt="logo" />
        <div>
          <AppContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
