import HobbyIntroduction from './components/Introduction';
import MyProjects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Hobby</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
  );
}

export default App;
