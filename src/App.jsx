
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './features/components/Layout.jsx';
import ApplicationFormPage from './features/pages/ApplicationFormPage.jsx';
import ApplicationsPage from './features/pages/ApplicationsPage.jsx';
import DashboardPage from './features/pages/DashboardPage.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path='/applications' element={<ApplicationsPage/>}/>
          <Route path='/applications/new' element={<ApplicationFormPage/>}/>
          <Route path='/applications/:id' element={<ApplicationFormPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
