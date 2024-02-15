import { useEffect, useState } from "react";
import { getUserArticle } from "../../service/Api";
import "./showUserarticle.css";
import Nav from "../../nve/nav";
import { Link } from "react-router-dom";
import Footer from "../../footer/footer";

export default function ShowUserAtricles()
{
    const [articles,setArticle]=useState()

    useEffect(()=>
    {
        getUserArticle().then((response)=>
        {
            console.log(response)
            setArticle(response.data.data)
        }).catch((error)=>
        {
            console.log(error)
        })

    },[])



    return(
        <>
        <Nav></Nav>
         <div className="container sowCont">
           {articles&&articles.length>0? articles.map(art=>(
            <><div className="card artCard"><p>Creater: {art.user.name}</p> <div className="card-body cart_body" key={art.id}>
                {art.article?(
                    <> <p className="content" dangerouslySetInnerHTML={{__html:art.article}}>
                    </p>
                    <Link to={`/showParticularArt/${art.id}`}>Read more..</Link>
                    </>
                ):(<div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
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