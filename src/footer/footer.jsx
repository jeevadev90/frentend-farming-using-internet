import { useState } from "react";
import "./footer.css";
import { addFeedback } from "../service/Api";
export default function Footer()
{

    const [feedback,setFeedback]=useState(
        {
            content:"",
            email:""
        }
    )
    const onchangeHndler=(event)=>
    {
        setFeedback({
        ...feedback,[event.target.name]:event.target.value
        })
    }
    console.log(feedback.content,feedback.email)



    const feedBack=(event)=>
    {
        event.preventDefault();
        addFeedback(feedback).then((response)=>
        {
            
        }).catch((error)=>
        {
            console.log(error)
        }).finally(()=>
        {
            
        })
    }

    return(
        <>
        <div className="footer bg-dark footer">
            <div className="row">
                <div className="col">
                    <span ><h5>CONTACT</h5></span><br />
                    <span>Dharmapuri</span><br />
                    <span>PIN: 636803</span><br />
                    <span></span><br />
                    <span>jeevajee902572@gmail.com</span><br />
                    <span>Phone: 9025724166</span><br />
                </div>
                <div className="col">
                    <h5>Links</h5>
                    <span><i className="fa-brands fa-instagram icon"></i></span>
                    <span><i className="fa-brands fa-linkedin icon"></i></span>
                    <span><i className="fa-brands fa-github icon"></i></span>
                    <span><i className="fa-brands fa-facebook icon"></i></span>
                    <span><i className="fa-brands fa-google icon"></i></span>
                </div>
                <div className="col">
                    <form  onSubmit={feedBack} className="bg-light feedback form-group" action="">
                        <h4>Feed Back</h4><br />
                        <textarea className="form-control" name="content" id="" cols="50" rows="5" onChange={onchangeHndler}></textarea>
                        <br />
                      <input type="text" placeholder="Email" name="email" onChange={onchangeHndler} />  
                      <br />
                      <input className="btn btn-success" type="submit" value="submit" />
                    </form>
                    
                </div>
            </div>
        </div>
        </>
    );
}