import React, { useContext, useEffect } from 'react';
import { programContext } from '../../../App';
import Program from '../Program/Program';
import './Programs.css'

const Programs = () => {
    const [Programs,setPrograms] = useContext(programContext);
    useEffect(()=>{
        fetch('Programs.json')
        .then(res=>res.json())
        .then(data=>setPrograms(data))
    },[])
    
    return (
        <div>
            
            <h2 className='text-center text-dark py-3 fw-bolder'>GYM <span className='text-danger'>PROGRAMS</span>  : {Programs.length}</h2>
           <div className='container programs-container'>
           {
                Programs.map(program=> <Program
                key={program.id}
                program={program}
                ></Program>)
            }
           

           </div>
            
        </div>
    );
};

export default Programs;