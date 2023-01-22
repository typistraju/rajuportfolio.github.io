import React,{useState} from "react";


const Contact = () => {
    const [data, setData] = useState ({
            fullname: "",
            phone: "",
            email: "",
            prof: "",
            passw:"",
            mesg: "",

    });

    const InputEvent = (event) => {
        const [name, defaultvalule] = event.target;
        setData ((preval) => {
            return {
                ...preval,
                 [name] : defaultvalule,
            };
        });
    };
    const formSubmit = (e) => {
            e.preventDefault();
            alert(`${data.fullname}, My Mobile Number is ${data.phone}, and Emil is ${data.email}, I want to say ${data.mesg} `);
    };
    return (
    <>
   <div className="my-5">
   <h1 className="text-center"> Contact Us </h1>
    </div>
    <div className="container contact_div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form onSubmit={formSubmit}>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  FullName</label>
  <input type="text" class="form-control"
   id="exampleFormControlInput1"
   name="fullname"
   defaultvalule={data.fullname}
   onChange={InputEvent}
    placeholder="Enter your Name" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Phone</label>
  <input type="Number" class="form-control" 
  id="exampleFormControlInput1"
  name="phone"
   defaultvalule={data.phone}
   onChange={InputEvent}
   placeholder="Mobile Number" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Email address</label>
  <input type="email" class="form-control" 
  id="exampleFormControlInput1" 
  name="email"
   defaultvalule={data.email}
   onChange={InputEvent}
  placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Professional title</label>
  <input type="text" class="form-control" 
  id="exampleFormControlInput1" 
  name="prof"
   defaultvalule={data.prof}
   onChange={InputEvent}
  placeholder="e.g web developer" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Password</label>
  <input type="password" class="form-control" 
  id="exampleFormControlInput1" 
  name="passw"
   defaultvalule={data.passw}
   onChange={InputEvent}
  placeholder="Enter Your Password" />
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">Browse your file</label>
  <input class="form-control" type="file" id="formFile" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">
  Message</label>
  <textarea class="form-control" 
  id="exampleFormControlTextarea1"
    name="mesg"
   defaultvalule={data.mesg}
   onChange={InputEvent}
  placeholder="Your Message Please...." 
  rows="3" >
   </textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">
    Submit form</button>
  </div>
     </form>
     </div>
     </div>
     </div>
     </>

    );

};
export default Contact;