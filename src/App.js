import { useEffect, useState } from 'react';
import './App.css';
import PopUpJokes from './components/PopUpJokes';

function App() {
  const [categoriesData, setcategoriesData] = useState([])
  const [loding, setloding] = useState(false)


  let fetchJokeCategories = async () => {
    setloding(true)
    const fetchCategoriesData = await fetch("https://api.chucknorris.io/jokes/categories")
    const CategoriesJsonData = await fetchCategoriesData.json()
    setloding(false)
    setcategoriesData(CategoriesJsonData);
    }   
   
    
   useEffect(() => {
       fetchJokeCategories()
   }, [])
   
  
  return (<>
    {loding ? <div className="flex flex-col items-center justify-center  mt-10"> <div class="loaderdives w-full  "><div></div><div></div><div></div></div></div>
      : <div className="  h-fit flex flex-col items-center justify-center">
           <h1 className="m-3 text-4xl text-green-500 animate-bounce font-bold ">Chuck Norries</h1>
      <PopUpJokes categoriesData={categoriesData}/>
    </div>}
    </>
  );
}

export default App;
