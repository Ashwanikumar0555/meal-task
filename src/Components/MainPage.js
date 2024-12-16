// import React from 'react'
// import Card from './Card';
// import  { useState } from 'react';
// const MainPage = () => {
//     const [data, setData] = useState()
//     const [search,setSearch] = useState();
     
//     const handleInput = (event) =>{
//         setSearch(event.target.value)

//     }
//     const myFun =  async () =>{
//         const get = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${search}');
//         const jsonData = await get.json()
//         // console.log(jsonData.meals);
//         setData(jsonData.meals)
//     }

//     console.log(data);
        
//   return (
//     <>
//     <div className='conatiner'>
//       <div className='searchBar'>
//         <input type='text' placeholder='Enter Dishe' onChange={handleInput}/>
//         <button onClick={myFun}>Search</button>
//         <div>
            
//         </div>
//         <Card detail={data}/>
//       </div>
//     </div>
//     </>
//   )
// }

// export default MainPage; 







import React, { useState } from 'react';
import Card from './Card';

const MainPage = () => {
  const [data, setData] = useState(null); 
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === '') {
      setMsg('Please Enter Something');
      setData(null); 
    } else {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await response.json();
        if (jsonData.meals) {
          setData(jsonData.meals);
          setMsg(''); 
        } else {
          setData(null); 
          setMsg('No results found.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setMsg('An error occurred while fetching data. Please try again.');
      }
    }
  };

  console.log(data);

  return (
    <>
      <h1 className='head'>FOOD RECIPE</h1>
      <div className="container">
        <div className="searchBar">
          <input 
            type="text" 
            placeholder="Enter Dish" 
            value={search} 
            onChange={handleInput} 
          />
          <button onClick={myFun}>Search</button>
          <h3>{msg}</h3> 
        </div>
        
        <Card detail={data} />
      </div>
    </>
  );
};

export default MainPage;
