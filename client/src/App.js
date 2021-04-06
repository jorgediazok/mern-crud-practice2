import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  contentStyle: {
    margin: '30px auto',
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <Router>
        <Container maxWidth="md">
          <Navbar />
          <Container className={classes.contentStyle} maxWidth="sm">
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" exact component={Todos} />
            </Switch>
          </Container>
        </Container>
      </Router>
    </>
  );
}

export default App;
