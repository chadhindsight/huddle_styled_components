import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import content from './content';

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
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {
            content.map((item, index) => (
              <Card key={index} item={item} />
            ))
          }
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
