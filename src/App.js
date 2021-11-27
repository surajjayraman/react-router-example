import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import Form from './components/Form';
import Navigation from './components/Navigation';

function App() {
  const onSubmit = (username) => {
    console.log(username);
  }

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route exact path="/" element={<HomePage/>} />  
        <Route path="/:id" element={<UserPage />} />  
        <Route path="/register" element={<Form onSubmit={onSubmit} />} />   
      </Routes>
      
    </div>
  );
}

export default App;
