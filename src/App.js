import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Banner from './components/Banner/Banner';
import Main from './components/layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Subscribe from './components/Subscribe/Subscribe';
import { useEffect, useState } from 'react';
import Areafood from './components/Areafood/Areafood';
import MealDetail from './components/MealDetail/MealDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const [search, setSearch] = useState('');

  // useEffect(()=>{
  //   console.log(search);
  // },[search]);

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main search={search} setSearch={setSearch}></Main>,
      children:[
        {
          path:'/',
          loader: async() =>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
          },
          element:<Home></Home>
        },
        {
          path:'/',
          loader: async() =>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
          },
          element:<Areafood></Areafood>
        },
        {
          path:'subscribe',
          element:<Subscribe></Subscribe>
        },
        {
          path:'shop',
          // loader: async({params})=>{
          //   // console.log(params.friendId);
          //   return fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          // },
          element: <Shop search={search} setSearch={setSearch}></Shop>,
        },
        {
          path:'shop/:idMeal',
          loader: async({params})=>{
            console.log(params.idMeal);
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
          },
          element: <MealDetail></MealDetail>
        },
        {
          path:'about',
          element: <About></About>
        }
      ]},
      {
        path:"*",
        element: <ErrorPage></ErrorPage>
      }
    ])
    return (
      <div className="App relative">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}


export default App;
