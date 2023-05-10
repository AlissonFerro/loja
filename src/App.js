import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NavBar from './components/navbar';
import NotFoundPage from './pages/notFound';

function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sobre' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </>
  );
}

export default App;
