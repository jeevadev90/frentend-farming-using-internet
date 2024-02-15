import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addComments, getParticularusrArt } from "../../service/Api";
import Nav from "../../nve/nav";
import "./showParticularuserArt.css"
import Footer from "../../footer/footer";
export default function ShowParticularArt(props)
{
    const{id}=useParams();
    const [content, setContent]=useState(
        {
            user:null,
            article:'',
            created_at:""
        }
    )
    
    const [getComment,setGetcomments]=useState()
    const [comment,setComment]=useState()
    const changeHandler=(event)=>
    {
        setComment(event.target.value);
    }
    const Handlesubmit=(event)=>
    {
        event.preventDefault();
        addComments(comment,id).then((response)=>
        {
            console.log(response)
        }).then((error)=>
        {
            console.log(error)
        }).finally(()=>
        {
            setComment("")
           
        })
    }
    useEffect(()=>
    {
        getParticularusrArt(id).then((response)=>
        {
            console.log(response);
            setContent({
              article:response.data.data.article,
              user:response.data.data.user.name,
              created_at:response.data.data.created_At
            });
            setGetcomments(response.data.data1)
        }).catch((error)=>
        {
            console.log(error);
        })

    },[id])



    

    return(
        <>
        <Nav/>
        <div className="container-fluid use-art">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-title d-flex justify-content-between">
                            <p>{content.user}</p><p>{content.created_at}</p>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <p dangerouslySetInnerHTML={{__html:content.article}}></p>
                            </div>
                        </div>
                    </div>
               </div>
             
               <div className="row">
                    <div className="col">
                        <form className="comment" onSubmit={Handlesubmit}>
                            <div className="row">
                                <div className="col">
                                    <h3>Comments</h3>
                                    <textarea  type="text" value={comment} onChange={changeHandler}></textarea>
                                    <div className=""></div>
                                    <input className="btn btn-success" type="submit" value="submit" />
                                </div>

                            </div>

                        </form>
                    </div>
                    <div className="row">
                        <div className="col u-comment ">
                            
                            {getComment&&getComment.length>0?getComment.map((g,index)=>(
                                <>
                                <div className="s-com" key={index}>
                                    <div className="us-com text-primary">
                                        <p><i className=" fa-solid fa-user"></i>{g.user.name}<sub className="text-secondary">{g.created_At}</sub></p>
                                        <p className="c-com">{g.comment}</p>
                                    </div>
                                
                                </div>
                                </>
                            )):<div></div>}
                        
                        </div>
                    </div>
                </div>
           </div>
        </div>
       
        <footer>
            <Footer/>
        </footer>
        </>
    );

}