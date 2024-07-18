import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoList from './screens/TodoList'
import Dashboard from './screens/Dashboard'

function App() {

  return (
    <>
    <div style={{marginBottom:10}}>Task Management</div>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<TodoList />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
