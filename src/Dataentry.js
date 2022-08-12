import 'bootstrap/dist/css/bootstrap.css';
import './Dataentry.css';
function Dataentry() {
    return (
        
      <div className="container">
        <div className="container1">
            <input type='text' id="firstname"  placeholder="FirstName"></input>
            <input type='text' id="lastname" placeholder="LastName"></input>
            <input type='date' id="date" placeholder="FirstName"></input>
            <input type='email' id="email" placeholder="FirstName"></input>
            <div className="genderclass">
            <label id='gender'>Gender:</label>
            <input type='radio' id="male" value="Male"></input>
            <label>Male</label>
            <input type='radio' id="male" value="Female"></input>
            <label>Female</label>
            </div><br></br>
            <select name="country" id="country" placeholder='Country'>
            <option >Country</option>
            <option value="India">India</option>
            <option value="Albania">Albania</option>
            <option value="Andorra">Andorra</option>
            <option value="Haiti">Haiti</option>
            </select>
            <select name="state" id="state" placeholder='State'>
            <option >State</option>
            <option value="tamilnadu">tamilnadu</option>
            <option value="Andhra">Andhra</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            </select>
            <select name="city" id="city" placeholder='city'>
            <option >City</option>
            <option value="Vellore">Vellore</option>
            <option value="Ranipet">Ranipet</option>
            <option value="Amboor">Amboor</option>
            <option value="Gindi">Gindi</option>
            </select>
            <input type='text' id="address"  placeholder="Address"></input>
            <input type='number' id="fpincode"  placeholder="Pincode"></input>

        </div>
        <div className='container2'>
            <input type='button' value="Submit" id='submit'></input>
            <input type='button' value='Reset' id='reset'></input>
        </div>
        <div className='container3'>
        <input type='text' id="filter"  placeholder="Filter"></input>
        <input type='button'  id='clear' value='clear'></input>
        </div>
        
      </div>
    );
  }
  
  export default Dataentry;