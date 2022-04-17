import React from 'react';
import './Program.css'
import { useNavigate } from 'react-router-dom';

const Program = ({program}) => {
    // console.log(program)
    const {id,img,price,description,name}=program
    const navigate= useNavigate()
    const handleToDetail=id=>{
        navigate(`/Program/${id}`)
    }
    return (
        <div className='program-container'>
            <img  src={img} alt="" />
           <div className= 'info d-flex justify-content-between mt-2 px-2'>
           <p> Charge: $ <span>{price}</span></p>
            <h5>{name}</h5>
           </div>
           <button onClick={()=>{handleToDetail(id)}} className=' btn btn-outline-success w-100'>READ MORE</button>
           
            
        </div>
    );
};

export default Program;