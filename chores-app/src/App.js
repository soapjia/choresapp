import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Chorelist from './chorelist.js';
import Editlist from './editlist.js';
import Recap from './recap.js';
import Viewmembers from './viewmembers.js';

// this will be the login page
const Home = () => (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
);

// successful login links to join housing group, then home page
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chorelist">Chorelist</Link>
          </li>
          <li>
            <Link to="/editlist">Editlist</Link>
          </li>      
          <li>
            <Link to="/viewmembers">Viewmembers</Link>
          </li>   
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chorelist" element={<Chorelist />} />
        <Route path="/editlist" element={<Editlist />} />
        <Route path="/viewmembers" element={<Viewmembers/>} />
      </Routes>

     </div>
  );
};
 

export default App;