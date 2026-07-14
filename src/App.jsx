import { Routes, Route } from 'react-router-dom'

import AddLog from "./components/AddLog";
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<AddLog />} />

    </Routes>
    </>
  )
}

export default App
