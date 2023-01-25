import { FaPlus } from "react-icons/fa";

function AddItem({newItem,setNewItem,handleSubmit}){
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
                setNewItem={setNewItem}

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

export default AddItem;