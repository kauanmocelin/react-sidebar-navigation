import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter BrowserRouter >
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </BrowserRouter >
    </>
  );
}

export default App;
