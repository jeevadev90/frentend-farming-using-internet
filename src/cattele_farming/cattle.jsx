import { Navigate } from "react-router-dom";
import Footer from "../footer/footer";
import Nav from "../nve/nav";
import { isAuthenticated } from "../service/Auth";
import "./cattle.css";
export default function Cattel()
{

    if(!isAuthenticated())
    {
        return <Navigate to="/"/>
    }

    return(
        <>
        <Nav/>
        <div className="container catlet-cont">
            
        </div>
        <Footer/>
        </>
    );
}