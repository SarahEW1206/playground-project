import { Details } from './components/Details';
import { Dialog } from './components/Dialog';
import { Header } from './components/Header';
import { Main } from './components/Main';

const App = () => (
  <div>
    <Header />
    <Main>
      <Dialog />
      <Details />
    </Main>
  </div>
);

export default App;
