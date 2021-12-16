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
import AdminRoute from './Pages/SignIn/AdminRoute/AdminRoute';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


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
                  <Route path="/about">
                        <About></About>
                  </Route>
                  <Route path="/blog">
                        <Blog></Blog>
                  </Route>
                  <PrivateRoute path="/purchase/:id">
                        <Purchase></Purchase>
                   </PrivateRoute>
                  <PrivateRoute path="/dashboard">
                        <DashBoard></DashBoard>
                  </PrivateRoute>
                  <AdminRoute path="/admin">
                       <Admin></Admin>
                  </AdminRoute>
                  <Route path="/register">
                       <Register></Register>
                  </Route>
                  <Route path="/login">
                       <Login></Login>
                  </Route>
                  <Route path="*">
                       <NotFound></NotFound>
                  </Route>
              </Switch>
              <Footer></Footer>
         </Router>
      </AuthProvider>
         
    </div>
  );
}

export default App;
