import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import '../assets/css/style.css';

function App(){
    return(
        <>
           <Router>
               <Switch>
                   <Route path="/" exact component={Home}/>
                   <Route path="/About" exact component={About}/>
                   <Route path="/Contact" exact component={Contact}/>
               </Switch>
           </Router>
        </>
    );
};

export default App; 