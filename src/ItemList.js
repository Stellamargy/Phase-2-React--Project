import LineItem from "./LineItem";

function ItemList({items,handleCheck,handleDelete}){
    return(
        <LineItem  
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}

        />
        

    )
}

export default ItemList;