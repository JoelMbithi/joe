import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header'; // Correct the path if needed
import Footer from './Footer';
function App() {
  return (
    <>
      <Header />
   <main>
   <Outlet />
   </main>
      <Footer/>
    </>
  );
}

export default App;
