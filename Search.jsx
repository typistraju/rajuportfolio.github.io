import React, {useState} from "react";
import Sresults from "./Sresults";

const Search = () => {
const [img, setImg] = useState ("");
const inputEvent = (event) => {
const data = event.target.value;
    setImg (data);
console.log (data);
};
   return (
    <>
      <div className="searchbar">
       <input type= "text" 
       placeholder= "please search"
       value={img}
       onChange= {inputEvent}
       
        />
        {img === " " ? null :  <Sresults name={img} /> }
       
      </div>
    </>


   );
};
export default Search;