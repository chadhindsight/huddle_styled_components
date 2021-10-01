import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Container } from './components/styles/Container.styled';

// Use a theme provider
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
}
function App() {
  return (
    <ThemeProvider>
      <>
        <Header />
        <Container className="App">
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
