import { useEffect, useRef, useState } from "react";
import "./admin.css"
import { addArticle, categoriesApi, getAdmin } from "../service/Api";
import { isAuthenticated } from "../service/Auth";
import { Navigate } from "react-router-dom";
import JoditEditor from "jodit-react";
export default function Admin()
{
    const descRef=useRef(null)
    const [name,setInputs]=useState("")
    const [image,setImage]=useState(null)
    const [aimage,setAimage]=useState(null)
    const[content,setContent]=useState({
        title:"",
        categories:""
    })
    const[description,setDescription]=useState("")
    const [role,setRole]=useState()
    const[cont,setCont]=useState()
    const handleInputs=(event)=>
    {
        setInputs(event.target.value);
        
    }
    const handleImage=(event)=>
    {
        setImage(event.target.files[0])
        
    }



    const handleConent=(event)=>
    {
        setContent({...content,[event.target.name]:event.target.value})
    }
    const handleCont=(event)=>
    {
        setCont(event)
    }
    const handleArtimg=(event)=>
    {
        setAimage(event.target.files[0])
    }

    const handleDesc=(event)=>
    {
        setDescription(event)
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

    const handleOnsubmit=(event)=>
    {
        event.preventDefault();
        addArticle(content,description,aimage,cont).then((response2)=>
        {
            console.log(response2)
        }).catch((error)=>
        {
            console.log(error)
        })
    }

    useEffect(()=>
    {
        getAdmin().then((response1)=>
        {
            console.log(response1);
        }).catch((error)=>
        {
            setRole(error.message)
            console.log(error)
        })

    },[])

    console.log(role)
    if(!isAuthenticated()|role==="Network Error")
    {
        return <Navigate to="/" />
    }

    return(
        <>
        <div className="container admin">
            <center><h1>ADMIN</h1></center>
            <div className="row"> 
                <div className="col">   
                <div> <h2>Add Categories</h2></div>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="from-control mb-3">
                        <lable className="from-control" id=""><p> name</p></lable>
                        <input type="text" className="form-control" value={name} name="name" onChange={handleInputs}/>
                        </div>
                        <div className="from-control mb-3">
                        <lable className="from-control" id="">Image</lable>
                        <input type="file" className="form-control"name="image"  onChange={handleImage} />
                        </div>
                        <div>
                            <input className="btn btn-success" type="submit" value="submit"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div><h2>Add Articles</h2></div>
                    <form className="form-control" onSubmit={handleOnsubmit} encType="multipart/form-data">
                        <div className="from-control mb-3">
                            <lable className="from-control">Title</lable>
                            <input type="text" className="form-control" value={content.title} onChange={handleConent} name="title" />
                        </div>
                        <div className="from-control mb-3">
                        <lable className="from-control">image</lable>
                            <input type="file" className="form-control"  onChange={handleArtimg} name="image" />
                        </div>
                        <div className="from-control mb-3">
                        <lable className="from-control">Description</lable>
                            <JoditEditor ref={descRef} onChange={handleDesc} />
                        </div>
                        <div className="from-control mb-3">
                        <lable className="from-control">Content</lable>
                            <JoditEditor ref={descRef} onChange={handleCont} />
                        </div>
                        <div className="from-control mb-3">
                        <lable className="from-control">Categories</lable>
                            <input type="text" className="form-control" value={content.categories} onChange={handleConent} name="categories" />
                        </div>
                        <input type="submit" className="btn btn-success" />
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}