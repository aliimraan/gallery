import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/container/Login';
import Home from './components/container/Home';
import Register from './components/container/Register';
import {Route,Switch} from 'react-router-dom'
import PrivateRoute from './components/HOC/PrivateRoute';
import Gallery from './components/container/Gallery';

const App=()=> {
  return (
    <div >
      <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute path="/gallery" component={Gallery}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
