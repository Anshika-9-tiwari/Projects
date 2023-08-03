import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    
const[formData,setFormData] = useState({firstName:"",lastName:"",email:"",country:"India",streetAddress:"",city:"",state:"",postalcode:"",comments:false,candidates:false,offers:false,pushNotifications:"",pushEmail:""})

 function changeHandler(event) {
  const{name,value,checked,type} = event.target;
   setFormData( (prev) =>({...prev, [name]:type ==="checkbox" ? checked: value}));
 }

 function submitHandler(event) {
  event.preventDefault();

  console.log("Finally printing the form data");
  console.log(formData);
 }
  
  return (
    <div className="App">
     <form onSubmit={submitHandler} className='form'>
      <h2>Form</h2>
      <label htmlFor='first name' className='label'>First Name</label><br></br>
      <input type="text" placeholder='first name' className="input"   onChange={changeHandler} name='firstName' id='firstName' value={formData.firstName} /><br/>
      
      <label htmlFor='last name'className='label' >Last Name</label><br></br>
      <input type="text" className="input" placeholder='last name'onChange={changeHandler} id="last name" name='lastName'  value={formData.lastName} />
       <br/>
       <label htmlFor='email' className='label'>Email Address</label><br></br>
      <input type="email" className="input" placeholder='tiwarianshikatiwari@gmail.com..'onChange={changeHandler} id='email' name='email'value={formData.email} />
       <br/>
      
      <label htmlFor='country' className='label'>Country</label><br/>
    
      <select id='country'  name='country' value={formData.country}>

        <option>India</option>
        <option>United State</option>
        <option>Canada</option>
        <option>Mexica</option>
        <option>Nepal</option>
      </select><br/>

      <label htmlFor='streetAddress'className='label'>Street Address</label><br/>
      <input type="text" className="input" placeholder='B-69'onChange={changeHandler} name='streetAddress' id='streetAddress' value={formData.streetAddress} /><br/>

      <label htmlFor='city'className='label'>City</label><br/>
      <input type="text" className="input" placeholder='New delhi'onChange={changeHandler} name='city' id='city' value={formData.city}  /><br/>

      <label htmlFor='state'className='label'>State</label><br/>
      <input type="text" className="input" placeholder='Delhi'onChange={changeHandler} name='state' id='state' value={formData.state} /><br/>

      <label htmlFor='postalcode' className='label'>Zip/Postal Code</label><br/>
      <input type="text" className="input" placeholder='12340'onChange={changeHandler} name='postalcode' id='postalcode' value={formData.postalcode}  /><br/><br/>

      {/* checkboxes */}

      <fieldset >
        
      <legend>By Email</legend>
      <div className='flex'>
      <input type='checkbox' onChange={changeHandler} name='comments' id='comments' checked={formData.comments} />
      <div>
      <label htmlFor='comments'>Comments</label>
      <p>Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>
      
      <div className='flex'>
      <input type='checkbox' onChange={changeHandler} name='candidates' id='candidates' checked={formData.candidates} />
      <div>
      <label htmlFor='candidates'>Candidates</label>
      <p>Get notified when a candidate applies for a job.</p>
      </div>
      </div>
      
      <div className='flex'>
      <input type='checkbox' onChange={changeHandler} name='offers' id='offers' checked={formData.offers} />
      <div>
      <label htmlFor='offers'>Offers</label>
      <p>Get notified when a candidate accepts or rejects an offer.</p>
      </div>
      </div>
      </fieldset>

      <fieldset className='radio'>
       <legend>Push Notifications</legend>
       <p>These are dilivered via SMS to your mobile phone.</p>
       <input type='radio' onChange={changeHandler} name='pushNotifications'     value="Everything" id='pushNotifications' />
       <label htmlFor='pushEverything'>Everything</label><br/>
       
       <input type='radio' onChange={changeHandler} name='pushNotifications'     value="Same as email" id='pushEmail' />
       <label htmlFor='pushEverything'>Same as email</label><br/>
      
       <input type='radio' onChange={changeHandler} name='pushNotifications'     value="No Push Notifications" id='pushNothing' />
       <label htmlFor='pushEverything'>No Push Notifications</label><br/>
      
    </fieldset>
    <button className='btn'>Save</button>
     </form>

   </div>
  );
}

export default App;
