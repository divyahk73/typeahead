import React,{useState,useEffect} from 'react'
import './DropDownFunc.css';

export default function DropDownFunc(props) {
    const [text,setText] =useState("");
    const [suggestions,setSuggestions]=useState("");
    const handleTextChange=(e)=>{
    //  const[iteams]=props.iteams;
     let suggestions1=[];
     let value=e.target.value;
     if(value.length>0){
        const regex = new RegExp(`^${value}`, `i`);
        suggestions1 = props.iteams.sort().filter(v => regex.test(v));
     }
     setSuggestions(suggestions1)
     setText(value);
    }
   const renderSuggestions=()=>{
    if(suggestions.length===0){
        return null
    }
    else{
        return(
            <ul>{suggestions.map((city)=><li>{city}</li>)}</ul>
        )
    }
   }

  return (
    <div className="TypeAheadDropDown">
        <input type="text" value={text} placeholder="enter city to search" onChange={handleTextChange}/>
        {renderSuggestions()}
    </div>
  )
}
