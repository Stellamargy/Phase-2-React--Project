import Header from "./Header";
import AddItem from "./AddItems";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
 
 function App(){
    const[items,setItems]=useState([
        {
            id:1,
            checked:true,
            item:"Shoes"
        },
        {
            id:2,
            checked:false,
            item:"Books"
        },
        {
            id:3,
            checked:false,
            item:"Snacks"
    
        }
    ]);
    const[newItem,setNewItem]=useState("")
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
    const[search,SearchItem]=useState("")

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
    const addItem=(item)=>{
        const id=items.length?items[items.length-1].id+1:1;
        const newItem={id,checked:false,item};
        const listItems=[...items,newItem]
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //addItem
        addItem(newItem);
        //reseting 
        setNewItem('');

    }
    

    return(
        <div className="App">
            <Header title="My Packing List"/> 
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem
                search={search}
                SearchItem={SearchItem}
            />
            <Content
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            /> 
            <Footer/>   
        </div>
    );
}

export default App;