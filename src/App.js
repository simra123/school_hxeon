import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard.page';
import Login from './pages/login.page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </>
  );
}

export default App;
