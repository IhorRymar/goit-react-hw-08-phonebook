import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './Phonebook/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import { current } from '../components/redux/auth/auth-operations';

import '../../src/index.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <UserRoutes />
    </div>
  );
}

export default App;
