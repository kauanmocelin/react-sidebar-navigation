import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/reports' component={Reports} />
        <Route path='/products' component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
