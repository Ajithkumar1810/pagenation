import React,{useState} from "react";
import JsonData from "./Mock_data.json";
import ReactPaginate from "react-paginate";
import './Pagegrid.css'




function Pagegrid(){
    const [users]=useState(JsonData);
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
                        <h3>{user.firstname}</h3>
                        <h3>{user.lastname}</h3>
                        <h3>{user.dob}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.gender}</h3>
                        <h3>{user.country}</h3>
                        <h3>{user.state}</h3>
                        <h3>{user.city}</h3>
                        <h3>{user.address}</h3>
                        <h3>{user.pincode}</h3>

                    </div>
        );
    })
    
    return (
        <div className="Pagegrid">
            {displayUser}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
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