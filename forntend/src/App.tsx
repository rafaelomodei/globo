import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './Pages/Home';
import { extendThemeChakraUI } from './Utils/Theme';

function App() {
  return (
    <ChakraProvider theme={extendThemeChakraUI}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
