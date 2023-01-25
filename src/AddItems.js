import { FaPlus } from "react-icons/fa";

function AddItems({newItem,setNewItem,handleSubmit}){
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">AddItem</label>
            <input
                type="text"
                id="addItem"
                autoFocus
                required
                placeholder="Add Item"
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}

            />
            <button 
                type="submit"
                aria-label="Add Item"
            >
                <FaPlus/>

            </button>

        </form>

    );
}

export default AddItems ;