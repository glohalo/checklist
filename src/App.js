import { Container, Paper} from '@mui/material';
import './App.css';
import CheckList from './components/CheckList';
import {ThemeProvider} from '@mui/material/styles';
import theme from './styles/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
          <Paper sx={{
            marginTop: "2rem",
            padding: '1rem',
            background:'linear-gradient(44.8deg, rgba(255, 136, 102, 0.67) -53.1%, rgba(255, 221, 136, 0.28) 49%)'}}>
            <CheckList/>
          </Paper>
      </Container>
    </ThemeProvider>
  );
};
export default App;
