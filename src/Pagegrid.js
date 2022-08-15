import React,{useState} from "react";
import JsonData from "./Mock_data.json";
import ReactPaginate from "react-paginate";
import './Pagegrid.css'
import { BsFillTrashFill} from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import './Dataentry.js';





function Pagegrid(){
   
    
    // let g=document.getElementById("filter").value;
    let users1=JsonData;
   
        users1=[...users1].sort((a,b)=>a.firstname>b.firstname?1:-1,);
    
        
         users1 = users1.filter(obj => {
            return obj.firstname !== "";
          });
         
    
        
    
    const [users]=useState(users1 );
   
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
                        {/* <h3>{user.firstname}</h3>
                        <h3>{user.lastname}</h3>
                        <h3>{user.dob}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.gender}</h3>
                        <h3>{user.country}</h3>
                        <h3>{user.state}</h3>
                        <h3>{user.city}</h3>
                        <h3>{user.address}</h3>
                        <h3>{user.pincode}</h3> */}
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
                        <td> <label id="edit"><BsFillPencilFill/></label></td>
                        <td> <label id="clear1"><BsFillTrashFill/></label></td>
                    </tr>
                </table>
                    </div>
        );
    })
    
    return (
        <div className="Pagegrid">
            {/* <input type="button" id='sort' value ="Sort the tabel"  onClick={sortvalue()}></input> */}
            <div className='container3'>
        <input type='text' id="filter"  placeholder="Filter" ></input>
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
    );
}

export default Pagegrid;