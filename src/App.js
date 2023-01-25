
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';


function App() {
  const[items,setItems]=useState([
    {
        id:1,
        checked:false,
        item:"One half pound bag of Cocoa"
    },
    {
        id:2,
        checked:false,
        item:"item 2"
    },
    {
        id:3,
        checked:true, 
        item:"item 3"
    }]);
    const[newItems,setNewItems]=useState('')

    function handleCheck(id){
        const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
        setItems(listItems)
        localStorage.setItem("shoppinglist" ,JSON.stringify(listItems))
    }
    function handleDelete(id){
        const listItems=items.filter((item)=>item.id!==id)
        setItems(listItems)
        localStorage.setItem("shoppinglist" ,JSON.stringify(listItems))
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log("I did it")
      setNewItems("")
    } 
  
    
  return (
    <div className="App">
      <Header title="My Groceries List" />
      <AddItem 
      newItems={newItems}
      setNewItems={setNewItems}
      handleSubmit={handleSubmit}
      />
      <Content items={items} 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
      
    </div>
  );
}

export default App;
