import classNames from 'classnames';
import { Toaster } from 'react-hot-toast';
import { Footer } from './components/Footer';
import { Participants } from './components/Participants';
import { Sidebar } from './components/Sidebar';
import './styles/index.scss'

function App() {
  return (
    <div className={classNames({
      app: true,
      'app--sidebar-on': 0
    })}>
      <Participants />
      <Sidebar />
      <Footer />
      <Toaster /> {/*this component shows notifications*/}
    </div>
  );
}

export default App;
