import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Biography from './pages/Biography';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contributions from './pages/Contributions';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import './App.css';
// Main App Component
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Biography />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
