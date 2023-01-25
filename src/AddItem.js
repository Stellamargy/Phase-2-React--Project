import { FaPlus } from "react-icons/fa";

function AddItem({newItems,setNewItems,handleSubmit}){

    return(
        <form className="addForm" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="Add Item">Add Item</label>
            <input 
            type="text" 
            autoFocus 
            required 
            placeholder="Add Item" 
            id="Add Item"
            value={newItems}
            onChange={(e)=>setNewItems(e.target.value)}
            ></input>
                <button  type="submit" aria-label="Add Item">
                <FaPlus/>
            </button>

        </form>
    )
}

export default AddItem;