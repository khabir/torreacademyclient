import UserHomePage from './pages/home-page/UserHomePage';
import Header from './components/header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './styles.css';
import UserList from './pages/user-list/UserList';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<UserHomePage />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}
