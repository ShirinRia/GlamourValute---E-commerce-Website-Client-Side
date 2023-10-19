import { useEffect, useState } from "react";
import Info from "./Info";

const Extrasection2 = () => {
    const [information,setinformation]=useState([])
    useEffect(() =>{
        fetch('/info.json')
        .then(res=>res.json())
        .then(data=>setinformation(data))
    },[])
    return (
        <div className=" bg-white shadow-lg bg-center bg-auto bg-no-repeat max-w-7xl mx-4 md:mx-auto rounded-lg">
       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 
       px-2 py-8">
          {
            information.map(info=><Info key={info.id}
            information={info}></Info>)
          }
      </div>
   </div>
    );
};

export default Extrasection2;