import './App.css';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core';
import ControladorPage from './components/ControladorPage';

const useStyles = makeStyles({
  Container: {
    minHeight: '100vh',
    paddingTop: '70px'
  },
})

function App() {

  const classes = useStyles()

  return (
    <Container
      className={classes.Container}
    >
     <ControladorPage/>
    </Container>
  );
}

/**/
export default App;
