import React from 'react';
import { useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Seach = () => {
    const [search,setseacrh]=React.useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setseacrh(false);
        }, 2000);

    })

  return (
    <div>{
    
        search ?
        <div>
            <ClipLoader color={'#D76936'} loading={search}  size={50} />
        </div>
       
          
        :
        <div>Hi I'm rrendered</div>
        
        
        
        
    }</div>
  )
}

export default Seach