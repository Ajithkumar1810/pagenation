import 'bootstrap/dist/css/bootstrap.css';
import './Dataentry.css';
import React,{useState} from "react";
import JsonData from "./Mock_data.json";
import ReactPaginate from "react-paginate";
import './Pagegrid.css'
import { BsFillTrashFill} from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import './Dataentry.js';
function Dataentry() {
    
    let [users1]=[JsonData.sort((a,b)=>a.firstname>b.firstname?1:-1,)];
    const [FirstNameDOM,setFirstNameDOM]=React.useState('');
      const [LastnameDOM,setLastnameDOM]=React.useState('');
      const [DateDOM,setDateDOM]=React.useState('');
      const [EmailDOM,setEmailDOM]=React.useState('');
      const [MaleDOM]=React.useState('Male');
      const [CountryDOM,setCountryDOM]=React.useState('');
      const [StateDOM,serStateDOM]=React.useState('');
      const [CityDOM,setCityDOM]=React.useState('');
      const [AddressDOM,setAddressDOM]=React.useState('');
      const [PincodeDOM,setPincodeDOM]=React.useState('');
        const [users,setuser]=useState(users1);
        const [filterval,setfilterval]=useState('')
   
  
  
  

        const findvalue=(e)=>{
            setfilterval(e.target.value);
            if(filterval!==""){
            setuser(users1.filter(obj => {
              return obj.firstname.match(filterval);
            }))
          }
          else{
            setuser(users1)
          }
        }
        // const deletevalue=(name)=>{
        //   // setuser(users1.filter(obj => {
        //   //   return obj.firstname!==(name);
        //   // }))
          
        // }
    function adddata(){
      document.getElementById("submitmsg").innerHTML="Submited sucessfully";
      
      
      
      const newdata=[{firstname:FirstNameDOM,
        lastname:LastnameDOM,
        dob:DateDOM,
        email:EmailDOM,
        gender:MaleDOM,
        country:CountryDOM,
        state:StateDOM,
        city:CityDOM,
        address:AddressDOM,
        pincode:PincodeDOM}]
        
        setuser([...users1,...newdata].sort((a,b)=>a.firstname>b.firstname?1:-1,))
    }
      

    
        
    
    
   
    // , setUser
    const [pageNumber,setPageNumber]=useState(0)
    const userPerPage=2
    const pageVisited=pageNumber* userPerPage
    const pageCount=Math.ceil(users.length / userPerPage)
    const changePage=({selected})=>{
        setPageNumber(selected)
    };
    const displayUser =users
    .slice(pageVisited,pageVisited+userPerPage)
    .map((user)=>{
   
        return (
            <div className="user">
                 
                <table >
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td >{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.dob}</td>
                        <td id="email">{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.city}</td>
                        <td>{user.address}</td>
                        <td>{user.pincode}</td>
                        <td> <label id="edit" ><BsFillPencilFill /></label></td>
                        <td> <label id="clear1"><BsFillTrashFill/></label></td>
                    </tr>
                </table>
                    </div>
        );
    })
    

    return (
      
        <div className='Dataentry'>
        <div className="container">
          <div className='topics'>
            <label>Angular 12 CRUD Example with Web API</label>
          </div>
        <div className="container1">
            <input type='text' id="firstname"  placeholder="FirstName" onChange={e => setFirstNameDOM(e.target.value)}></input>
            <input type='text' id="lastname" placeholder="LastName" onChange={e => setLastnameDOM(e.target.value)}></input>
            <input type='date' id="date" onChange={e => setDateDOM(e.target.value)}></input>
            <input type='email' id="email" placeholder="Email" onChange={e => setEmailDOM(e.target.value)}></input>
            <div className="genderclass">
            <label id='gender'>Gender:</label>
            <br></br>
            <input type='radio' id="male" value="Male"></input>
            <label>Male</label>
            <br></br>
            <input type='radio' id="male" value="Female"></input>
            <label>Female</label>
            <br></br>
            {/* <input type='radio' id="others" value="others"></input>
            <label>Others</label> */}
            </div><br></br>
            <select name="country" id="country" placeholder='Country' onChange={e => setCountryDOM(e.target.value)}>
            <option >Country</option>
            <option value="India">India</option>
            <option value="Albania">Albania</option>
            <option value="Andorra">Andorra</option>
            <option value="Haiti">Haiti</option>
            </select>
            <select name="state" id="state" placeholder='State' onChange={e => serStateDOM(e.target.value)}>
            <option >State</option>
            <option value="Tamilnadu">tamilnadu</option>
            <option value="Andhra">Andhra</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            </select>
            <select name="city" id="city" placeholder='city'onChange={e => setCityDOM(e.target.value)}>
            <option >City</option>
            <option value="Vellore">Vellore</option>
            <option value="Ranipet">Ranipet</option>
            <option value="Amboor">Amboor</option>
            <option value="Gindi">Gindi</option>
            </select>
            <input type='text' id="address"  placeholder="Address" onChange={e => setAddressDOM(e.target.value)}></input>
            <input type='number' id="fpincode"  placeholder="Pincode"onChange={e => setPincodeDOM(e.target.value)}></input>

        </div>
        <div className='container2'>
            <input type='button' value="Submit" id='submit' onClick={adddata}></input>
            <input type='button' value='Reset' id='reset'></input>
        </div>
        <span id='submitmsg'></span>
       
        
        <div className="Pagegrid">
            {/* <input type="button" id='sort' value ="Sort the tabel"  onClick={sortvalue()}></input> */}
            <div className='container3'>
        <input type='text' id="filter"  placeholder="Filter" onChange={findvalue}></input>
        {/* <input type='button'  id='clear' value={"clear"}></input> */}
        <label id="clear"><BsFillTrashFill/></label>
        
        
        </div>
            
            <table id="title">
                    <tr>
            <td><input type="checkbox"></input></td>
                        <td>FirstName </td>
                        <td>LastName</td>
                        <td>Date of birth</td>
                        <td>Email</td>
                        <td>Gender</td>
                        <td>Country</td>
                        <td>State</td>
                        <td>City</td>
                        <td>Address</td>
                        <td>Pincode</td>
                        <td>Edit</td>
                        <td>Delete</td>
                        </tr>
                </table>
                {displayUser}
                <br></br>
            <ReactPaginate
                page={1}
                sizePerPage={5}
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationbutton"}
                previousClassName={"perviousButton"}
                nextClassName={"nextbutton"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}

            />
        </div>
      </div>
      </div>

    );
  }
  
  export default Dataentry;