import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from './pages/post';
import Homepage from './pages/Homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/post' element={<Post/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
