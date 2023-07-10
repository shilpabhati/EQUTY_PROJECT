import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Learn from './screens/Learn';


function App() {
  
  return (

    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/learn" element={<Learn/>}/>
      </Routes>
      

    </Router>
  );
}

export default App;
