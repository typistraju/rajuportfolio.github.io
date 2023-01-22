import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ListCompo = (props) => {
    const [line, setLIne] = useState(false);

    const cutIt = () => {
        setLIne(true);
    };
    return(
    <div className="todo_syle">
         <span onClick={cutIt}>
          <DeleteIcon className="deleteicon"/>
          </span>
      <li style={{ textDecoration: line ? "line-through": "none" }}> 

      {props.text} </li> 
      </div>
    );
};
export default ListCompo;
