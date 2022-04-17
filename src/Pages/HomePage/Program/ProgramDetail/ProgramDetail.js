import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../../../Detail/Detail';
import useProgramReview from '../../../Hooks/ProgramReview/ProgramReview';


const ProgramDetail = () => {
    const [programs,setPrograms]= useProgramReview();
 
    const {ProgramID}= useParams()
    
    return (
        <div>
            <p>Selected Program: {ProgramID}</p>
            
           
            
            
               
            
            <button className='btn btn-info'>Proceed CheckOut</button>
        </div>
    );
};

export default ProgramDetail;