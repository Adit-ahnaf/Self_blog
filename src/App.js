import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Details from './Details';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';
import {Datascrap} from './Datascrap';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <Datascrap>
    <Navigation/>          
     <Router>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/about" component={About} />
      </Switch>
    </Router>
    <Footer/>
    </Datascrap>
    
  );
}

export default App;
