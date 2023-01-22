import React,{useState} from "react";
import ListCompo from "./ListCompo";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const ToDoLists = () => {
    const [item, setItem] = useState ("");
    const [newitem, setNewItem] = useState ([]);
    const itemEvent = (event) => {
     setItem (event.target.value);
    };

  const  listOfNewItems = () => {
    setNewItem((prevValue) => {
        return [...prevValue, item];
    });
    setItem ("");
  };
    

    return (
        <>
    <div className="main_div">
     <div className="center_div" >
     <br/>
     <h1> ToDo List </h1>
     <br/>
     <input type ="text" value={item} placeholder ="Add an item" onChange={itemEvent} />
     <Button className="newbtn" onClick={listOfNewItems}> 
     <AddIcon/>
     </Button>

        <br/>
        <ol>
         {newitem.map((val, index) =>{
          return <ListCompo key={index} text={val}/>;
         })};
        </ol>
        <br/>
        </div>
      </div>
      </>
    );

};

export default ToDoLists;