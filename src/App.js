import './App.scss';
import Main from './components/main/main';
import Header from './components/header/header';
import User from './models/User';

function App() {
  const user = new User("moi", 1.9, 2, 202220);
  return (
    <>
      <Header user={user} />
      <Main />
    </>
  );
}

export default App;
