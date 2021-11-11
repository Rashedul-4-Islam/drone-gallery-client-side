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
import Purchase from './Pages/HomePage/Purchase/Purchase';
import Admin from './Pages/Admin/Admin/Admin'


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
                  <PrivateRoute path="/purchase/:id">
                        <Purchase></Purchase>
                   </PrivateRoute>
                  <PrivateRoute path="/dashboard">
                        <DashBoard></DashBoard>
                  </PrivateRoute>
                  <Route path="/admin">
                       <Admin></Admin>
                  </Route>
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
