import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import BookDetailPage from './pages/BookDetailPage'
import { Home } from 'lucide-react'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/create" element={<CreatePage/>}/> */}
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/create" element={<CreatePage/>}/>

      </Routes>
    </div>
  )
}

export default App
