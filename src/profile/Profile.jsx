import { useEffect,useState } from "react";
import "./profile.css";
import { profileApi, putImage } from "../service/Api";
import { isAuthenticated, logout } from "../service/Auth";
import { Navigate,Link, useNavigate } from "react-router-dom";
import Nav from "../nve/nav";
import Footer from "../footer/footer";

export default function Profile()
{
    
    const [isVisible, setIsVisible] = useState(false);
    const [visible,setVisible]= useState(false)

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    const navigate=useNavigate();
    const [details,setDetails]=useState(
        {
            firstName:"",
            lastName:"",
            name:"",
            email:"",
            acrticleCount:null,
            image:null
        })
    const[pimage,setPimage]=useState(null) 
    
    
   
    const handleImage=async(event)=>
    {
       
        setPimage(event.target.files[0])
    }

    

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
                acrticleCount:response.data.data.acrticleCount,
                image:response.data.data.image
            })
            if(response.data.data.role==="ADMIN")
            {
                setVisible(true)
            }
        }).catch((error)=>
        {
            console.log(error);
        })

    },[])    
    const handleCliK=async(event)=>
    {
        
        putImage(pimage).then((response)=>
        {
            console.log(response)
            // setDetails({
            //     image:response.data
            // })
        }).catch((error)=>
        {
            console.log(error)
        }).finally(()=>
        {
            setIsVisible(false)
        })
    }

    function logoutUser()
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
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center " >
                       
                    <div className="justify-content-between">
                        {details.image&&details.image.length>0?(<img className="profile-imgs fa-solid" src={`data:images/jpg;base64,${details.image}`} alt="img"/>): <i className="profile-imgs fa-solid fa-user"></i>}
                       
                    </div>

                    <div className="row justify-content-start">
                       
                    </div>
                   
                </div>
            </div>
            <div className="row justify-content-start">
              <div className="col ">
                    <button className="btn btn-success" onClick={toggleVisibility}>Edit</button>
                    <form onSubmit={handleCliK} encType="multipart/form-data">
                    {isVisible && (
                        <div className="edit">
                        <input  type="file" onChange={handleImage}  />
                        <button className="btn btn-success"  type="submit" >Sumbit</button>
                        </div>
                    )}
                    </form>
                    </div>
                    </div>
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
                          <div className="card-link">
                            {visible?(<Link type="click" className="btn btn-secondary" to={"/admin"}>ADMIN PAGE</Link>):null}
                          
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
