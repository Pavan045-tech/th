import React from 'react';
import { useEffect } from 'react';
import './Main.css';
import HashLoader from "react-spinners/HashLoader";

const Seach = () => {
    const [search,setseacrh]=React.useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setseacrh(false);
        }, 3000);

    })

  return (
    <div className='main'>{
    
        search ?
        <div>
            <HashLoader color={'#5F36D7'} loading={search}  size={50} />
        </div>
       
          
        :
        <div>
            <h1>Hi I'm Loaded</h1>
        </div>
        
        
        
        
    }</div>
  )
}

export default Seach