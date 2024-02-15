import { useEffect,useState } from "react";
import "./profile.css";
import { profileApi } from "../service/Api";
import { isAuthenticated, logout } from "../service/Auth";
import { Navigate,Link, useNavigate } from "react-router-dom";
import Nav from "../nve/nav";
import Footer from "../footer/footer";

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
        <div className="container profileCont">
               <div className="row align-content-start">
                
                    
                    
        
                <div className="col-9 col-sm-4 col-md-7 col-lg-6">
                    <div className="card detailCard align-items-center">
                        <div className="card-title">  <h1 className="username">{details.name}</h1></div>
                    <div className="card-body ">
                        <div className="card-text ">
                            <div className="row con">
                                <div className="col-5">
                                FirstName: </div>
                                <div className="col">{details.firstName}</div>
                                    
                          </div>
                          <div className="row  con ">
                          <div className="col-5"> LastName: </div>
                                <div className="col">{details.lastName}</div>
                         </div>
                                
                            
                          </div>
                          <div className="row con">
                          <div className="col-4"> Email: </div>
                                <div className="col-8">{details.email}</div>

                          </div>
                          <div className="card-link">
                          <button type="click" className="btn btn-danger" onClick={logoutUser}>LOG OUT</button>
                          </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-9 col-md-6">
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
                </div>
            
         <footer>
            <Footer/>
         </footer>
        </>
    );
}