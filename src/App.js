import logo from './logo.svg';
import './App.css';

import Slides from './components/Slides';
import { SLIDES_DATA } from "./constants";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Slides slides={SLIDES_DATA} />
      </div>
    </div>
  );
}

export default App;
