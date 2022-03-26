import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserDetailUpdate from './components/UserDetailUpdate';
import SubmitForm from './components/SubmitForm';
import {GlobalProvider} from './context/store/GlobalState'
import UsersList from './components/UsersList';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';

function App() {
  return (
    <GlobalProvider>
      <MyNavbar />
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<UserDetailUpdate />} />
        <Route path="/form" element={<SubmitForm />} />
        <Route path="/userList" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
    </div>
    </GlobalProvider>
  );
}

export default App;
