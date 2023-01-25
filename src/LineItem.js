import {FaTrashAlt} from "react-icons/fa"
function LineItem({item,handleDelete,handleCheck}){
    return(
        <li className="item" >
                <input type="checkbox" checked={item.checked}  onChange={()=>handleCheck(item.id)}/>
                <label >{item.item}</label>
                <FaTrashAlt
                    onClick={()=>handleDelete(item.id)}
                    role="button"
                    tabIndex="0"
                />

            </li>

    )
}

export default LineItem;