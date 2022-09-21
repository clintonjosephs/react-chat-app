import { Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './pages/auth';
import Chat from './pages/chat';

const App = () => (
  <Routes>
    <Route path="/" element={<Auth />} />
    <Route path="/chat/:id" element={<Chat />} />
    <Route path="*" element={<Auth />} />
  </Routes>
);

export default App;
