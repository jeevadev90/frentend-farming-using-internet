import { useState } from "react";
import "./admin.css"
import { categoriesApi } from "../service/Api";
export default function Admin()
{

    const [name,setInputs]=useState("")
    const [image,setImage]=useState()
    const handleInputs=(event)=>
    {
        setInputs(event.target.value);
        console.log(event.target.value)
    }
    const handleImage=(event)=>
    {
        setImage(URL.createObjectURL(event.target.files[0]))
        console.log(event.target.files)
    }
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        categoriesApi(name,image).then((response)=>
        {
            console.log(response);
        }).catch((error)=>
        {
            console.log(error);
        })

    }
    return(
        <>
        <div className="container admin">
                
         <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="input-group mb-3">
            <span className="input-group" id="">name</span>
            <input type="text" className="form-control" name="name" onChange={handleInputs}/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group" id="">Image</span>
            <input type="file" className="form-control"name="image" onChange={handleImage} />
            </div>
            <div>
                <input className="btn btn-success" type="submit" value="submit"/>
            </div>
        </form>
        </div>
        </>
    );
}