import { useEffect, useState } from "react";
import { getAlluserArticle } from "../../service/Api";
import Nav from "../../nve/nav";
import "./alluserArticle.css";
import { Link, Navigate } from "react-router-dom";
import Footer from "../../footer/footer";
import { isAuthenticated } from "../../service/Auth";

export default function AlluserArticle()
{
    const[page,setPage]=useState(0);
    const[data,setData]=useState();
    
    

    useEffect(()=>{
        getAlluserArticle(page).then(response=>
            {
                
                setData(response.data.data.content)
            }).catch(error=>
                {
                    console.log(error);
                })
    },[page])
    if(!isAuthenticated())
    {
        return <Navigate to="/" />
    }


    return(
        <>
        <Nav/>
        <div className="container a-cont">
        <div className=".row">
            {data&&data.length>0?data.map(d=>(
                
                <div className="card art-card" key={d.id}>
                    
                    <div className="card-body">
                        <div>
                        <p>{d.user.name}</p>
                       </div>
                        <div className="card-text">
                            <p className="show_art" dangerouslySetInnerHTML={{__html:d.article}}></p>
                            <Link to={`/showParticularArt/${d.id}`}>Read more</Link>
                        </div>
                        <div>
                        <p>{d.created_At}</p>
                    </div>
                    </div>
                    
                </div>
                
            )):<div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}
        </div >

        <button className="btn btn-secondary" onClick={() => setPage(page - 1)}>Prev</button>
        
        <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>Next</button>
        </div>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}