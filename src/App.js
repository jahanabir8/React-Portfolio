import './App.css';
import Menu from './Components/Menu/Menu';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Skill from './Components/Skills/Skill';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Service></Service>
    </div>
  );
}

export default App;