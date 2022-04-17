import React from 'react';
import { useParams } from 'react-router-dom';
import useProgramReview from '../../Hooks/ProgramReview/ProgramReview';
import Program from '../Program/Program';
import ProgramDetail from '../Program/ProgramDetail/ProgramDetail';
import './Programs.css'

const Programs = () => {
    const [programs,setPrograms]= useProgramReview();
  
    
    return (
        <div>
            <h2 className='text-center text-dark py-3 fw-bolder'>GYM <span className='text-danger'>PROGRAMS</span>  : {programs.length}</h2>
           <div className='container programs-container'>
           {
                programs.map(program=> <Program
                key={program.id}
                program={program}
                ></Program>)
            }
           

           </div>
            
        </div>
    );
};

export default Programs;