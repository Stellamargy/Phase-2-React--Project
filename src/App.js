import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import { useState, useEffect } from 'react';
import apiRequest from './apiRequest';
import {Routes,Route} from 'react-router-dom';



function App() {
  const API_URL=' http://localhost:3500/items'
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  // Fetching data from db.json
  useEffect(()=>{
    const fetchItems=async()=>{
      try{
        const response =await fetch(API_URL);
        const listItems= await response.json();
        console.log(listItems);
        setItems(listItems);
      }catch (err){
        console.log (err.stack)
      }
    }
    (async()=>await fetchItems())();

  },[])
  const addItem = async(item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    //Post (adding an item)
    const postOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(myNewItem )
    }
    const result=await apiRequest(API_URL,postOptions)

  }
  
//handling check 
  const handleCheck =async  (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

     const myItem=listItems.filter((item)=>item.id===id)

      //patch method,just updating,changes the status of check ,to be either true or false
    const updateOptions ={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    };
    const reqUrl=`${API_URL}/${id}`
    const result= await apiRequest(reqUrl,updateOptions)
  }
  
  const handleDelete = async(id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    // Delete Method-deletes an item completely from db.json
    const deleteOptions={method:'DELETE'}
    const reqUrl=`${API_URL}/${id}`
    const result= await apiRequest(reqUrl,deleteOptions)

    
  }
    
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    //resets after adding an item
    setNewItem('');
  }

  return (
    <>
      
      <NavBar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/packing" element={ 
          <div className="App">
           <Header title="Packing List" />
           <AddItem
              newItem={newItem}
              setNewItem={setNewItem}
              handleSubmit={handleSubmit}
            />
            <SearchItem
              search={search}
              setSearch={setSearch}
            />
            <Content
              items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
            <Footer length={items.length} />
         </div>
              }/>
        
      </Routes>
      
      
    </>
  );
}

export default App;
      