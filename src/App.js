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
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/SignIn/Login/Login';
import Shop from './Pages/Shop/Shop';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './Pages/SignIn/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
           <Header></Header>
              <Switch>
                  <Route exact path="/">
                        <Home></Home>
                  </Route>
                  <Route path="/home">
                        <Home></Home>
                  </Route>
                  <Route path="/shop">
                        <Shop></Shop>
                  </Route>
                  <PrivateRoute path="/dashboard">
                        <DashBoard></DashBoard>
                  </PrivateRoute>
                  <Route path="/register">
                       <Register></Register>
                  </Route>
                  <Route path="/login">
                       <Login></Login>
                  </Route>
              </Switch>
              <Footer></Footer>
         </Router>
      </AuthProvider>
         
    </div>
  );
}

export default App;
