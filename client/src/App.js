import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import DeletePage from './pages/DeletePage';
import UsersPage from './pages/UsersPage';
import ActionsPage from './pages/ActionsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={LoginPage}></Route>
          <Route path="/delete" exact component={DeletePage}></Route>
          <Route path="/users" exact component={UsersPage}></Route>
          <Route path="/actions" exact component={ActionsPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
