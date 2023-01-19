import logo from './logo.svg';
import './App.css';
import TypeAheadDropDown from './TypeAheadDropDown';
import cities from './cities';
import DropDownFunc from './DropDownFunc';

function App() {
  return (
    <div className="App">
     <TypeAheadDropDown iteams={cities} />
     <div style={{height:"20px"}}></div>
     <DropDownFunc iteams={cities} />
    </div>
  );
}

export default App;
