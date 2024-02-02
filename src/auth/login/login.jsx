import React from "react";
import "./login.css";
import { useState } from "react";
import { loginApi } from "../../service/Api";
import { StoreUserData } from "../../service/Storage";
import { isAuthenticated } from "../../service/Auth";
import { Link, Navigate } from "react-router-dom";



export default function Login()
{
    const initialErrors={
        Email:{required:false},
        Password:{required:false},
        custom_error:null
    }

   
    
    const[loading,setLoading]=useState(false)
    const [errors,setErrors]=useState(initialErrors);
    const [inputs,setInputs]=useState(
        {
            email:"",
            password:""
        }
    )

    const handleInputs=(event)=>
    {
        setInputs({...inputs,[event.target.name]:event.target.value});

    }

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        let errors=initialErrors;
        let haserror=false;
       
        if(inputs.email==="")
        {
            errors.Email.required=true;
            haserror=true;
        }
        if(inputs.password==="")
        {
            errors.Password.required=true;
            haserror=true;
        }
        
        if(haserror!==true)
        {
            setLoading(true);
            loginApi(inputs).then((data)=>{
                console.log(data)
                StoreUserData(data.data.data)
            }).catch((error)=>{
                
                console.log(error);
                const err=error.response.data.error;
                if(err!==null)
                {
                    setErrors({...errors,custom_error:" Email or Password is incorrect"})
                }

                

            }).finally(()=>{
                setLoading(false);
            })


        }
        setErrors({...errors})


    }
    if(isAuthenticated())
    {
        return <Navigate to="/" />
    }

    return(
        <>
       <section className="login-block">
            <div className="container logCont">
                <div className="row ">
                    <div className="col login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form onSubmit={handleSubmit} className="login-form" action="">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                            <input type="email"  className="form-control" onChange={handleInputs} name="email"  id="" placeholder="email"  />
                            {errors.Email.required?<span className="text-danger" >
                                Email is required.
                            </span>:null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input  className="form-control" type="password"onChange={handleInputs}  name="password" placeholder="password" id="" />
                            {errors.Password.required?<span className="text-danger" >
                                Password is required.
                            </span>:null}
                        </div>
                        <div className="form-group">
                            <div  className="text-center">
                                {loading?<div className="spinner-border text-primary " role="status">
                                <span className="sr-only">Loading...</span>
                                </div>:null}
                            </div>
                            {errors.custom_error?<span className="text-danger" >
                            <p>{errors.custom_error}</p>
                            </span>:null}
                            
                            <input  type="submit" className="btn btn-login float-end" disabled={loading}  value="Login"/>
                            
                        </div>
                        <div className="clearfix justify-content-center"></div>
                        <div className="form-group">
                        Create new account ? Please <Link className="btn-regNv" to="/register">Register</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
       
    );
}