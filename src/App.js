import './App.css';
import BlockSection from './components/BlockSection';
import Header from './components/Header'
import ToolSection from './components/ToolSection';
import ProjectSection from './components/ProjectSection';
import EmailForm from './components/EmailForm'

const App = () => {
  return (
    <div className="App">
      <Header />
      <BlockSection />
      <ToolSection />
      <ProjectSection />
      <EmailForm />
    </div>
  );
}

export default App;
