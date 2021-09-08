import { HashRouter, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard.page';
import Login from './pages/login.page';

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </HashRouter>
    </>
  );
}

export default App;
