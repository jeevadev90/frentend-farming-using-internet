import { useEffect, useState } from "react";
import { deleteArticle, getUserArticle } from "../../service/Api";
import "./showUserarticle.css";
import Nav from "../../nve/nav";
import { Link, Navigate } from "react-router-dom";
import Footer from "../../footer/footer";
import { isAuthenticated } from "../../service/Auth";

export default function ShowUserAtricles()
{
    const [articles,setArticle]=useState()

    function handleOnclick(e,id)
    {
        e.preventDefault();
        deleteArticle(id).then((response)=>
        {
            
        }).catch((error)=>
        {
            console.log(error)
        })
    }

    useEffect(()=>
    {
        getUserArticle().then((response)=>
        {
            setArticle(response.data.data)
        }).catch((error)=>
        {
            console.log(error)
        })

    },[])

    if(!isAuthenticated())
    {
        return <Navigate to="/" />
    }


    return(
        <>
        <Nav></Nav>
         <div className="container sowCont">
           {articles&&articles.length>0? articles.map(art=>(
            <><div className="card artCard"><p>Creater: {art.user.name}</p> <div className="card-body cart_body" key={art.id}>
                {art.article?(
                    <> <p className="content " dangerouslySetInnerHTML={{__html:art.article}}>
                    </p>
                    <Link to={`/showParticularArt/${art.id}`}>Read more..</Link>
                    <form onSubmit={(e)=>{handleOnclick(e,art.id)}}>
                    <button type="submit" className="btn btn-danger" >Delete</button> 
                    </form>
                    </>
                ):(<div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>)}
            </div><p>Created_At: {art.created_At}</p></div>
            </>
           )):<div className="spinner-grow text-primary" role="status">
           <span className="visually-hidden">Loading...</span>
         </div>}
           
        </div>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}