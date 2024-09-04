import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App';

const router = {
  home: '/',
  notFound: '/not-found',
  // Add more routes as needed
}

const App = () => {
  return (
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/not-found' element={<NotFound />} />
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

