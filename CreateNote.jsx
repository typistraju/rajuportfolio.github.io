import React,{useState} from "react";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
   
    const [note, setNote] = useState ({
        title:"",
        content:"",
    });
     
     const inputEvent = (event) => {
         //const value  = event.target.value; 
         //const name  = event.target.name;

         const {name, value} = event.target;
         
        setNote((prevDate) => {
        return {
            ...prevDate,
            [name]: value,
       }  } );
       console.log(note);
     };
      const addEvent = () => {
          props.passNote(note);
          setNote ({
          title:"",
          content:"",
      });
      };

      const expandIt = () => {
        setExpand(true);
      };
      const btNormal = () => {
        setExpand(false);
      };
    return (
        <>
         <div className="main_note" onDoubleClick={btNormal}>
         <form>
          { expand ? (
         <input type="text" 
           name = "title"
         value={note.title}
         onChange={inputEvent}
          placeholder="Title"
         autoComplete="off" />) : null }
         <textarea rows="" column="" 
           name = "content"
         value={note.content} 
         onChange={inputEvent}
         placeholder="write a note.." 
         onClick={expandIt} > </textarea>
          { expand ? (
         <Button onClick={addEvent}>
          <AddCircleIcon className="plus_sign" />
         </Button>) : null }
         </form>
          </div>
        
         </>
    );
};

export default CreateNote;