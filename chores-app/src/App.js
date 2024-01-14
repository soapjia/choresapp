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
    <div className="join-a-house-group">
      <div className="div">
        <div className="text-wrapper">Join a housing group:</div>
        <div className="overlap">
          <div className="text-wrapper-2">Enter Code</div>
        </div>
        <p className="p">Enter your 8 digit housemate code</p>
        <p className="don-t-have-a-code">
          <span className="span">Don&#39;t have a code? Create one </span>
          <span className="text-wrapper-3">here</span>
        </p>
        <div className="overlap-group">
          <Link to="/chorelist" className="text-wrapper-4">
            Join Group
          </Link>
        </div>
      </div>
    </div>
    </div>
);

// successful login links to join housing group, then home page
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chorelist" element={<Chorelist />} />
        <Route path="/editlist" element={<Editlist />} />
        <Route path="/viewmembers" element={<Viewmembers/>} />
        <Route path="/recap" element={<Recap/>} />
      </Routes>

     </div>
  );
};
 

export default App;