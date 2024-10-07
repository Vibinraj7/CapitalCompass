
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DashBoard } from './components/Dashboard'
import { Auth } from './components/auth'
import { FinancialRecordsProvider } from './context/financial_record_context.tsx'


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <FinancialRecordsProvider>
            <DashBoard />
          </FinancialRecordsProvider>} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Router>
  )
}

export default App
