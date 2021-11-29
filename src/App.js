import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import Form from './components/Form';
import Users from  './components/Users';
import Layout from './components/Layout';
import User from './components/User';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();

  const onSubmit = (username) => {
    console.log(username);
  }

  const [users, setUsers] = useState([
    {id: '1', fullName: "Suraj Jayraman"},
    {id: '2', fullName: "John Doe"}
  ]);

  const handleRemoveUser = (id) => {
    console.log("Remove User id: ", id);    
    setUsers((state) => state.filter((user) => user.id !== id));   
    navigate('/users');
  }
  

  return (
    <div className="App">    
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<HomePage/>} />  
          <Route path=":id" element={<UserPage />} />  
          <Route path="register" element={<Form onSubmit={onSubmit} />} /> 
          <Route path="users" element={<Users users={users} />} >  
            <Route path=":id" element={<User onRemoveUser={handleRemoveUser}/>} />
          </Route>  
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
