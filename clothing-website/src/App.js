import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
