import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { Container } from '@material-ui/core';

function App() {
  return (
    <>
      <Router>
        <Container maxWidth="md">
          <Navbar />
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" exact component={Todos} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
