import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" exact component={Todos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
