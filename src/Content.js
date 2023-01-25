

import ItemList from "./ItemList";

function Content({items , handleCheck,handleDelete}){
    
        
    
    return(
        <main>
            <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            
            />
            
        </main>

    );
}

export default Content;