import { isAuthenticated } from "../../../service/Auth";
import { useRef, useState } from 'react';
import "./userArticle.css"
import JoditEditor from 'jodit-react';
import { writeArticle } from '../../../service/Api';
import { Navigate } from 'react-router-dom';
import Nav from "../../../nve/nav";
import Footer from "../../../footer/footer";
export default function UserArticles()
{


    const textRef=useRef(null);
    
    const [texts, setText] = useState("");
    const [errors,setErrors]=useState(null)
    function handleInputs(event)
    {
        event.preventDefault()
        setText(event)   
    }
   
   
    function handleOnclick(event)
    {
        event.preventDefault();
        writeArticle(texts).then((response)=>
        {
            
           
        }).catch((error)=>
        {
            console.log(error);
            let err=error.response.data.error[0].message
            if(err!==null)
            {
            setErrors(err)
            }
        }).finally(()=>
        {
            setText(" ")
           
           
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
            <JoditEditor value={texts}   ref={textRef}  onChange={handleInputs}/>

            <input type="submit" value="submit" />
            {errors?(<span className="text-danger"><p>{errors}</p></span> ):null}
            </form>
            </div>
            
        </div>
        {/* <button onClick={handleOnclick}>submit</button> */}
        <footer>
            <Footer/>
        </footer>
        </>
    );
}