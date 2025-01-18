import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';
import StudyAssistant from './pages/AIChat';
import FAQ from './pages/FAQs';
import Contact from './pages/Contact';
import UploadNotes from './pages/UploadNotes';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/study-assistant" element={<StudyAssistant />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upload-notes" element={<UploadNotes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
