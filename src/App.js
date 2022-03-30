import logo from './logo.svg';
import './App.css';
import Welcome from './components/header';

function App() {
  const divX = <div>WelcomeX</div>  

  return (
    <>
    <Welcome/>
    <div>
      {divX}
    </div>
    <div>
      {divX}
    </div>
    </>
  );
}

export default App;

 