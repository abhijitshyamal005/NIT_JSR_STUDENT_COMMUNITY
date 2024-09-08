import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App';
import Registration from './components/Registration';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import Complain from './components/Complain';

const router = {
  home: '/',
  notFound: '/not-found',
  registration:'/registration',
  login: '/login',
  ContactUs: '/contact-us',
  Complain: '/complain',
}

const App = () => {
  return (
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path={router.registration} element={<Registration />} />
        <Route path={router.login} element={<Login />} />
        <Route path={router.ContactUs} element={<ContactUs />} />
        <Route path={router.Complain} element={<Complain />} />

        {/* Add more routes here */}
        <Route path="*" element={<Navigate to={router.notFound} replace />} />
      </Routes>
  )
}

export default App;
// instruction to install tailwindcss
// npm install tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// npm install tailwindcss postcss autoprefixer
// tailwind config file
