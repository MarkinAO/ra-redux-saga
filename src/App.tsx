import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Search from './components/search/Search';

function App() {
  const links = [
    {path: '/search', text: 'Задача 1: поиск'},
  ]
  
  return (
      <> 
        <div className="pages">
            <Routes>
                <Route path="/" element={<Navigation links={links}/>}>
                  <Route path="/search" element={<Search />} />
                </Route>                
            </Routes>
        </div>     
      </>
  )
}

export default App
