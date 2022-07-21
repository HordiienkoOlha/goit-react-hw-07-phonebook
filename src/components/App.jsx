// import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import {lazy} from 'react';

// import ContactForm from './ContactsForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

const AppBar = lazy(() => import('./AppBar/AppBar'));
const HomeView = lazy(() => import('../views/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const NotFoundView = lazy(() => import('../views/NotFoundView'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />} >
          <Route index element={<HomeView />} />
          <Route path="contacts" exact element={<ContactsView />} />
          <Route path="*" element={<NotFoundView/>} />
        </Route>
      </Routes>

    </>
  );
};
