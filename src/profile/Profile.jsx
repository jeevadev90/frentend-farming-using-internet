import { useEffect,useState } from "react";
import "./profile.css";
import { profileApi } from "../service/Api";
import { isAuthenticated, logout } from "../service/Auth";
import { Navigate,Link, useNavigate } from "react-router-dom";
import Nav from "../nve/nav";

export default function Profile()
{
    const navigate=useNavigate();
    const [details,setDetails]=useState(
        {
            firstName:"",
            lastName:"",
            name:"",
            email:"",
            acrticleCount:null
        })
    useEffect(()=>
    {


        profileApi().then((response)=>
        {
            console.log(response)
            setDetails({
                firstName:response.data.data.firstName,
                lastName:response.data.data.lastName,
                name:response.data.data.name,
                email:response.data.data.email,
                acrticleCount:response.data.data.acrticleCount
            })
        }).catch((error)=>
        {
            console.log(error);
        })

    },[])    

    const logoutUser=()=>
    {
        logout();
        
        navigate('/login')
         
    }

   if(!isAuthenticated())
   {
    return <Navigate to="/login" />;
   }

    return(
        <>
        <Nav></Nav>
        <div className="container-fluid profileCont">
               <div className="row align-content-start">
                
                    <div className="col-3 ">
                    <i className="profile-image fa-solid fa-user"></i>
                        
                    </div>
                    
        
                <div className="col-4">
                    <div className="card detailCard align-items-center">
                        <div className="card-title">  <h1 className="username">{details.name}</h1></div>
                    <div className="card-body ">
                        <div className="card-text ">
                            <div className="row con">
                                <div className="col">
                                FirstName: </div>
                                <div className="col">{details.firstName}</div>
                                    
                          </div>
                          <div className="row  con ">
                          <div className="col"> LastName: </div>
                                <div className="col">{details.lastName}</div>
                         </div>
                                
                            
                          </div>
                          <div className="row con">
                          <div className="col"> Email: </div>
                                <div className="col">{details.email}</div>

                          </div>
                          <div className="card-link">
                          <button type="click" className="btn btn-danger" onClick={logoutUser}>LOGOUT</button>
                          </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="card detailCard2">
                        <div className="card-title">  <h1 className="username">YOUR ARTICLES</h1></div>
                        <hr/>
                    <div className="card-body ">
                        <h2>{details.acrticleCount}</h2>
                        
                    </div>
                    <div className="card-link"><Link to="/showUserArticles">View</Link></div>
                </div>
                </div>
                </div>
            
         
        </>
    );
}