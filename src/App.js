import './App.scss';
import Main from './components/main/main';
import Header from './components/header/header';
import User from './models/User';

function App() {
  const user = new User("moi", 1.5, 202220);
  return (
    <div>
      <Header user={user} />
      <Main />
    </div>
  );
}

export default App;
