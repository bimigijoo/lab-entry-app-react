import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import AddLog from "./components/AddLog";
import ViewLog from "./components/ViewLog";
import Home from "./components/Home";
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-lab" element={<AddLog />} />
      <Route path='/view-all' element={<ViewLog/>} />
    </Routes>
    </>
  )
}

export default App
