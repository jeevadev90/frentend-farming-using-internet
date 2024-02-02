import "./nav.css";
import myImg from "./img/leaf.jpeg";
import { Link } from "react-router-dom";

import { isAuthenticated } from "../service/Auth";
import { useEffect } from "react";



function Nav()
{
  function expand()
  {
    const exValue=document.querySelector(".dropdown-menu");
    exValue.classList.toggle("show")
  }
  // function leave()
  // {
  //   const exValue=document.querySelector(".dropdown-menu");
  //   exValue.classList.remove("show")

  // }
  // const[auth,setAuth]=useState()

  useEffect(()=>{
    
  
  },[])
  


    const title="இயற்கை வேளாண்மை";

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
  <div className="container-fluid">
  <img className="logoImg me-1" src={myImg} alt="img"></img>
    <Link className="navTitle nav  me-3" to="/">{title}</Link>
    <button className="btn-toggle navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse nav    " id="navbarSupportedContent">
      
        <div className="navbar-nav">
          <li><Link className="navLinkD me-4"  to="/">முகப்பு</Link></li>
      
      
          <li className="nav-item dropdown me-4">
          <Link className="navLinkD dropdown-toggle" to="f" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  onMouseEnter={expand} onMouseLeave={expand}>
          விவசாயம்
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="navLink dropdown-item" to="/categories">இயற்கை வேளாண்மை </Link></li>
            <li><Link className="navLink dropdown-item " to=""> கால்நடைகள் </Link></li>
          </ul>
        </li> 
        <li><Link className="navLinkD me-4"  to="/userArticle">Create</Link></li>
        
        
        
      {/* <form className="d-flex">
        <input className="form-search me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn-search " type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form> */}
      </div>
      {!isAuthenticated()?<> <ul className="nav justify-content-end">
        <li><Link className="navLinkD  " to="/login"> Login </Link></li>
        </ul>
        <ul className="nav ">
          <li><Link className="navLinkD " to="/register">Register</Link></li>
        </ul></>:null }
        {isAuthenticated()?<>
        <li className=" "><Link className="navLinkD" to="/profile"><i className="userImg fa-solid fa-user"></i></Link></li>
        </> :null} 
      
      
    </div>
  
      
  </div>
</nav>
        </>
    );
}

export default Nav;