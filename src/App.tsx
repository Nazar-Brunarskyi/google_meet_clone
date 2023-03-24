import classNames from 'classnames';
import { Toaster } from 'react-hot-toast';
import { Footer } from './components/footer';
import { Participants } from './components/Participants';
import { Sidebar } from './components/Sidebar';
import { useAppSelector } from './redux/hooks';
import './styles/index.scss'

function App() {
  const { message } = useAppSelector(state => state.sidebar)

  return (
    <div className={classNames({
      app: true,
      'app--sidebar-on': message
    })}>
      <Participants />
      <Sidebar />
      <Footer />
      <Toaster /> {/*this component shows notifications*/}
    </div>
  );
}

export default App;
