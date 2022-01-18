import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import ShopPage from './ShopPage/ShopPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </Router>
  );
}

export default App;
