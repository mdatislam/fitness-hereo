import { useEffect, useState } from "react"

const useProgramReview=()=>{
    const [programs,setPrograms]= useState([]);
    useEffect(()=>{
        fetch('Programs.json')
        .then(res=>res.json())
        .then(data=>setPrograms(data))
    },[])
    return [ programs,setPrograms]
}
export default useProgramReview;