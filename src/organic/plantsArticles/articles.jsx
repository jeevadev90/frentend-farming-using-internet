import { useEffect,useState } from "react";
import "./articles.css";
import { getArticlesApi } from "../../service/Api";
import { Link, useParams } from "react-router-dom";
import { isAuthenticated } from "../../service/Auth";
import { Navigate } from "react-router-dom";
import Nav from "../../nve/nav";
import Footer from "../../footer/footer";

export default function DefaultArticles(props)
{
    // const { id } = props.match.params;
    const {id,name}=useParams();
    console.log(id,name);
    const [articles,setArticles]=useState();

    useEffect(()=>{
        
        
        getArticlesApi(id).then((response)=>
        {
            console.log(response);
            setArticles(response.data.data);
           
        }).catch((error)=>
        {
            console.log(error)
        })

    },[id])

    if(!isAuthenticated())
    {
        return <Navigate to="/" />
    }

    return(
        <>
        <Nav></Nav>
        <div className="Articles container">
           <div>
                <h1>{name}</h1>
            </div>
            {articles&&articles.length>0?articles.map(a=>(
                <>

            <div className="card mb-3 articleCard" key={a.id} >
            <div className="row g-0">
                <div className="col-md-4" key={a.id}>
                <img className="articleImg " src={`data:image/png;base64,${a.image}`} alt="img"/>
                </div>
                <div className="col-xl-8 articleBody">
                <div className="card-body" key={a.id}>
                    <h5 key={a.id} className="card-title">{a.title}</h5>
                    {a.description?(<p  dangerouslySetInnerHTML={{__html:a.description}} className="srt"/>):

                    (<div key={a.id}><div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div></div>)
                    }
                    <Link to={`/showArticle/${a.id}`} >More to reade.. </Link>
                </div>
                </div>
            </div>
            </div>


                </>

            )):<p><div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div></p>}
            </div>
                  <footer>
                    <Footer/>
                    </footer>  
        </>
    );
}