import { Routes, Route, Navigate } from 'react-router-dom'
import PageLayout from './pages/page-layout/PageLayout'
import Books from './pages/books/Books'

function App() {

  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/books" element={<Books />}/>
        <Route path="*" element={<Navigate to="/books"/>}/>
      </Route>
    </Routes>
  )
}

export default App
