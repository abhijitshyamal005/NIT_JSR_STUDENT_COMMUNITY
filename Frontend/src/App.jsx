import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import NotFound from './components/pages/NotFound.jsx'
import './App';
import Registration from './components/Registration';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import Complain from './components/Complain';
import MyAccount from './components/MyAccount';
import CourseNotes from './components/CourseNotes';
import AppLayout from './components/AppLayout';

const router = {
  home: '/',
  notFound: '/not-found',
  registration:'/registration',
  login: '/login',
  ContactUs: '/contact-us',
  Complain: '/complain',
  MyAccount: '/my-account',
  CourseNotes: '/course-notes',
}

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<AppLayout/>}>
        <Route index element={<Home />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path={router.registration} element={<Registration />} />
        <Route path={router.login} element={<Login />} />
        <Route path={router.ContactUs} element={<ContactUs />} />
        <Route path={router.Complain} element={<Complain />} />
        <Route path={router.MyAccount} element={<MyAccount />} />
        <Route path={router.CourseNotes} element={<CourseNotes />} />
        </Route>

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

