import './App.scss';
import Main from './components/main/Main';
import Header from './components/header/Header';
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
