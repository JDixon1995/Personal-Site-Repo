import './App.css';
import BlockSection from './components/BlockSection';
import Header from './components/Header'
import ToolSection from './components/ToolSection';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BlockSection />
      <ToolSection />
    </div>
  );
}

export default App;
