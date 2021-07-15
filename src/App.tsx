import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./components/Home"
import Counter from './components/Counter'


import GlobalStyles from './styles/global'
function App() { 
  

  return (
    <div className="App">
      <GlobalStyles/>
      <Router>
        <NavBar/>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/counter" component={Counter}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
