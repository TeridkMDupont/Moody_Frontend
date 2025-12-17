import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';
import NavBar from './components/NavBar/NavBar';

import Dashboard from './components/Dashboard/Dashboard.jsx';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Landing from './components/Landing/Landing';

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  );
};

export default App;