import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { programContext } from '../../../App';
import './ProgramDetail.css'

const ProgramDetail = () => {
    const [Programs] = useContext(programContext);
    const {ProgramID}= useParams();
    const selectProgram= Programs.find(x=> x.id==ProgramID)
    return (
        <div className='container Detail-container'>
            <img src={selectProgram?.img} alt="" />
            <div>
                <h4>Name:{selectProgram?.name}</h4>
                <p>Charge: ${selectProgram?.price}</p>
                <p>Detail: {selectProgram?.description}</p>
                <Link to='/Pay'><button className='btn btn-info'> Proceed Checkout</button></Link>

            </div>
            
        </div>
    );
};

export default ProgramDetail;