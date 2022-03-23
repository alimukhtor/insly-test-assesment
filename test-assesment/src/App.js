import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserDetailUpdate from './components/UserDetailUpdate';
import SubmitForm from './components/SubmitForm';
import {GlobalProvider} from './context/GlobalState'
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<UserDetailUpdate />} />
        <Route path="/form" element={<SubmitForm />} />
        <Route path="/userList" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
