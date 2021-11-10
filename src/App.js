import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/HomePage/Header/Header'
import Home from './Pages/HomePage/Home/Home';
import Footer from './Pages/Footer/Footer';
import Register from './Pages/SignIn/Register/Register';
// import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
         <Router>
           <Header></Header>
              <Switch>
                  <Route exact path="/">
                        <Home></Home>
                  </Route>
                  <Route path="/home">
                        <Home></Home>
                  </Route>
                  <Route path="/register">
                       <Register></Register>
                  </Route>
              </Switch>
              <Footer></Footer>
         </Router>
    </div>
  );
}

export default App;
