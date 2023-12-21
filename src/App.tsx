import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Search from './components/search/Search';
import ListAndDetails from './components/ListAndDetails/ListAndDetails';
import Item from './components/ListAndDetails/Item';
import List from './components/ListAndDetails/List';
import Newsfeed from './components/newsfeed/Newsfeed';

function App() {
  const links = [
    {path: '/search', text: 'Задача 1: поиск', id: 'Задача 1: поиск'},
    {path: '/list-and-details', text: 'Задача 2: список и детали', id: 'Задача 2: список и детали'},
    {path: '/newsfeed', text: 'Задача 3: лента новостей', id: 'Задача 3: лента новостей'},
  ]
  
  return (
      <> 
        <div className="pages">
            <Routes>
                <Route path="/" element={<Navigation links={links}/>}>
                  <Route path="/search" element={<Search />} />
                  <Route path="/list-and-details" element={<ListAndDetails />} >
                    <Route path="/list-and-details" element={<List />} />
                    <Route path="/list-and-details/:id/details" element={<Item />} />
                  </Route>
                  <Route path="/newsfeed" element={<Newsfeed />} />
                </Route>                
            </Routes>
        </div>     
      </>
  )
}

export default App
