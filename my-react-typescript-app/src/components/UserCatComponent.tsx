
import {UserCatInterface} from "../interfaces/UserCatInterface"

const UserCat = ({name, age, onFollow}: UserCatInterface) =>{
    return(
        <div>
            <h2>{name},{age}</h2>
            <button onClick={onFollow}>Follow</button>
        </div>
            
        );
} 

export default UserCat;