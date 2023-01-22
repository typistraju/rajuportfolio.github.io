import React from "react";
import {useParams, useLocation, useNavigate} from "react-router-dom";

const User = () => {
   const {fname, lname} = useParams ();
   const location = useLocation ();
   const navigate = useNavigate ();
   console.log (navigate);
return (
    <>
    <h1 className="text-center"> User {fname} {lname} Page </h1>
    <p> My Current Location is {location.pathname} </p>
    {location.pathname === `/user/Mr/Raju` ? (
      <button className="btn btn-outline-success" onClick={() => navigate(-1)}> Go Back </button>
    ) : null}
   </>
);
};
export default User;