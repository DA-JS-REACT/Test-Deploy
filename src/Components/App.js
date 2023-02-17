
import './App.css';
import { Navigation } from '../Pages/Navigation';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <HashRouter>
            <Navigation />
        </HashRouter>
    </div>
  );
}

export default App;
