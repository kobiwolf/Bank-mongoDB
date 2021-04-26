import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import DeletePage from './pages/DeletePage';
import UsersPage from './pages/UsersPage';
import ActionsPage from './pages/ActionsPage';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <LoginPage setUser={setUser} />
          </Route>
          <Route path="/delete" exact>
            <DeletePage />
          </Route>
          <Route path="/users" exact>
            <UsersPage />
          </Route>
          <Route path="/actions" exact>
            <ActionsPage />
          </Route>
          {user && <div>{user}</div>}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
