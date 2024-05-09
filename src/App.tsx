import Header from './components/Header.tsx';
import FrontPage from './pages/FrontPage.tsx';

function App() {
  return (
    <div className="w-full h-full flex flex-col justify-between content-stretch">
      <Header/>
      <FrontPage/>
    </div>
  );
}

export default App;
