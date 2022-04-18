import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Detail from '../../../Detail/Detail';
import useProgramReview from '../../../Hooks/ProgramReview/ProgramReview';


const ProgramDetail = () => {
    const [programs,setPrograms]= useProgramReview();
 
    const {ProgramID}= useParams()
    
    return (
        <div className='py-4 text-center'>
        <h3> Service Detail No: {ProgramID}</h3>
        <Link to='/Pay'><button className='btn btn-info'> Pay For Booking</button></Link>
     </div>
    );
};

export default ProgramDetail;