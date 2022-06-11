import './App.css';
import BlockSection from './components/BlockSection';
import Header from './components/Header'
import ToolSection from './components/ToolSection';
import ProjectSection from './components/ProjectSection'

const App = () => {
  return (
    <div className="App">
      <Header />
      <BlockSection />
      <ToolSection />
      <ProjectSection />
    </div>
  );
}

export default App;
