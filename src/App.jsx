import { Routes, Route } from 'react-router-dom'

import AddLog from "./components/AddLog";
import ViewLog from "./components/ViewLog";
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<AddLog />} />
      <Route path='/view-all' element={<ViewLog/>} />
    </Routes>
    </>
  )
}

export default App
