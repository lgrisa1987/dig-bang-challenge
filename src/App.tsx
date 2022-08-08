import { ContextProvider, Main } from './components';

const App = () => {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
};

export default App;
