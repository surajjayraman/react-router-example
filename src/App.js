import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import Form from './components/Form';
import Users from  './components/Users';
import Layout from './components/Layout';

function App() {
  const onSubmit = (username) => {
    console.log(username);
  }

  return (
    <div className="App">    
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<HomePage/>} />  
          <Route path="/:id" element={<UserPage />} />  
          <Route path="/register" element={<Form onSubmit={onSubmit} />} /> 
          <Route path="/users" element={<Users />} />  
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
