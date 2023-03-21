import { Toaster } from 'react-hot-toast';
import { Footer } from './components/footer';
import './styles/index.scss'

function App() {
  return (
    <div className="app">
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
