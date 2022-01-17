import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import ShopPage from './ShopPage/ShopPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </Router>
  );
}

export default App;
