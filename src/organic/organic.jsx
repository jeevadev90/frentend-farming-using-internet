import { useEffect, useState } from "react";
import "./organic.css"
import { getCategoriesApi } from "../service/Api";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../service/Auth";
import { Navigate } from "react-router-dom";
import Nav from "../nve/nav";
import Footer from "../footer/footer";
function Categories()
{

    const[images,setImage]=useState();

    useEffect(()=>
    {
        getCategoriesApi().then((response)=>{
           

            setImage(response.data.data)

        }).catch((error)=>
        {
            console.log(error)
        })
    }, [])

    if(!isAuthenticated())
    {
        return <Navigate to="/" />
    }

    return(
        <>
        <Nav></Nav>
        <div className="org-cont container">
            <div className="row">
                <div className="col-md-2">
                    <h1 className="title">CATEGORIES</h1>
                </div>
                <div className="col">
                    
                </div>
                
            </div>
            <div className="row">
                    {images && images.length>0?images.map(i=>(
                        
                        <div className="imgCard card"key={i.id}>
                            <img className="organicImg" src={`data:images/png;base64,${i.images}`} alt={i.name}/>
                          
                            <div className="card-body imgBody"> 
                             <Link className="" to={`/defaultArticles/${i.id}/${i.name}`}>
                                <p className="imgText">{i.name}</p>
                                </Link>
                            </div>
                           
                        </div>
                         
                    )):<div><div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div></div>}
            </div>
        </div>
        <footer>
            <Footer/>
        </footer>

        </>
    );
}

export default Categories;