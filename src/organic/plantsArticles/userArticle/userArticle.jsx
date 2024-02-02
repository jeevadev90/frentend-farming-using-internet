import { isAuthenticated } from "../../../service/Auth";
import { useRef, useState } from 'react';
import "./userArticle.css"
import JoditEditor from 'jodit-react';
import { writeArticle } from '../../../service/Api';
import { Navigate } from 'react-router-dom';
import Nav from "../../../nve/nav";
export default function UserArticles()
{


    const textRef=useRef(null);
    
    const [texts, setText] = useState("");
    const handleInputs=(event)=>
    {

        setText(event)
        
         
    }
   
   
    const handleOnclick=(event)=>
    {
        event.preventDefault();
        writeArticle(texts).then((response)=>
        {
            console.log(response)
           
        }).catch((error)=>
        {
            console.log(error);
        }).finally(()=>
        {
            setText("")
           
        })
    }

    if(!isAuthenticated())
    {
        return <Navigate to="/" />
    }

    return(
        <>
        <Nav></Nav>
        <div className="container uacont">
            <div className="row ">
                <h1 className="text-succes ">
                  WRITE ARTICLES
                </h1>
            </div>
            <div className="row">
            <form onSubmit={handleOnclick} >
            <JoditEditor   ref={textRef}  onChange={handleInputs}/>
            <input type="submit"  value="submit" />
            </form>
            </div>
            
        </div>
        {/* <button onClick={handleOnclick}>submit</button> */}
        
        </>
    );
}