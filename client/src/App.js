import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './routs/HomePage';
import Header from './components/Header';
import UsersPage from './routs/UsersPage';
import ActionsPage from './routs/ActionsPage';

const endpoint =
  process.env.NODE_ENV === 'production'
    ? '/api/users'
    : 'http://localhost:3000/';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/users" exact component={UsersPage}></Route>
          <Route path="/actions" exact component={ActionsPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
