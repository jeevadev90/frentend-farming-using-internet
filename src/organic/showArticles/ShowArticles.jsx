import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getParticularArticleApi } from "../../service/Api";
import "./showArticles.css";
import { isAuthenticated } from "../../service/Auth";
import Nav from "../../nve/nav";
import Footer from "../../footer/footer";

export default function ShowArticle(props)
{
    const{id}=useParams();
    console.log(id);
    
    const[article,setArticle]=useState(
        {
            title:null,
            image:null,
            content:null
        }
    )

    useEffect(()=>{

        getParticularArticleApi(id).then((response)=>
        {
            
            setArticle({
                title:response.data.data.title,
                image:response.data.data.image,
                content:response.data.data.content
            })
        })

    },[id])
    
    if(!isAuthenticated())
    {
        return <Navigate to="/" />
    }

    return(
        <>
        <Nav></Nav>
        <div className="container sowCont">
            <div className="row">
                <h1 className="text-success">{article.title}</h1>
            </div>
            <div className="row imgRow">
                <img src={`data:images/png;base64,${article.image}`} alt="img"/>
            </div>
            <div className="row">
                {article.content?(
                    <p  dangerouslySetInnerHTML={{__html:article.content}}></p>
                ):(<div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>)}
            </div>
        </div>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}