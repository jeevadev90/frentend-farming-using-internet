import { Link, Navigate } from "react-router-dom";
import"./register.css";
import { useState } from "react";
import { registerApi } from "../../service/Api";
import { StoreUserData } from "../../service/Storage";
import { isAuthenticated } from "../../service/Auth";


export default function Register()
{
    const initialErrors={
        FirstName:{required:false},
        LastName:{required:false},
        userName:{required:false},
        Email:{required:false},
        Password:{required:false},
        custom_error:null
    }

   
    
    const[loading,setLoading]=useState(false)
    const [errors,setErrors]=useState(initialErrors);
    const [inputs,setInputs]=useState(
        {
            firstName:"",
            lastName:"",
            username:"",
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
        if(inputs.firstName==="")
        {
            errors.FirstName.required=true;
            haserror=true;
        }
        if(inputs.lastName==="")
        {
            errors.LastName.required=true;
            haserror=true;
        }
        if(inputs.username==="")
        {
            errors.userName.required=true;
            haserror=true;
        }
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
            registerApi(inputs).then((data)=>{
                console.log(data)
                StoreUserData(data.data.data)
            }).catch((error)=>{
                
                console.log(error);
                const err=error.response.data.error;
                if(err!==null)
                {
                    setErrors({...errors,custom_error:"Username or Email Already registered"})
                }

                

            }).finally(()=>{
                setLoading(false);
            })


        }
        setErrors({...errors});


    }

    if(isAuthenticated())
    {
       return <Navigate to="/"/>
    }

    return(
        <>  
        <div className=" register-block">
             <div className="container-fluid registerContainer">
             <div className="row ">
                 <div className="col register-sec">
                     <h2 className="text-center">Register Now</h2>
                     <form onSubmit={handleSubmit} className="register-form " action="" >
                     <div className="form-group nav justify-content-start">
                         <label htmlFor="exampleInputFirstName" className="text-uppercase">FirstName</label>
         
                         <input type="text" className="form-control" onChange={handleInputs} name="firstName" id=""  />
                         {errors.FirstName.required?(<span className="text-danger" >
                             Name is required.
                         </span>):null
                         }
                     </div>
                     <div className="form-group nav justify-content-start">
                         <label htmlFor="exampleInputLastName" className="text-uppercase">LastName</label>
         
                         <input type="text" className="form-control" onChange={handleInputs} name="lastName" id=""  />
                         {errors.LastName.required?(<span className="text-danger" >
                             Name is required.
                         </span>):null
                         }
                     </div>
                     <div className="form-group nav justify-content-start">
                         <label htmlFor="exampleInputUserName" className="text-uppercase">UserName</label>
         
                         <input type="text" className="form-control" onChange={handleInputs} name="username" id=""  />
                         {errors.userName.required?(<span className="text-danger" >
                             Name is required.
                         </span>):null
                         }
                     </div>
                     <div className="form-group nav justify-content-start">
                         <label htmlFor="exampleInputEmail" className="text-uppercase">Email</label>
         
                         <input type="text"  className="form-control" onChange={handleInputs} name="email" id=""  />
                         {errors.Email.required?(<span className="text-danger" >
                             Email is required.
                         </span>):null}
                     </div>
                     <div className="form-group nav justify-content-start">
                         <label htmlFor="exampleInputPassword" className="text-uppercase">Password</label>
                         <input  className="form-control" type="password" onChange={handleInputs}  name="password" id="" />
                         {errors.Password.required?(<span className="text-danger" >
                             Password is required.
                         </span>):null}
                     </div>
                     <div className="form-group">
         
                         {errors.custom_error?(<span className="text-danger" >
                         <p>{errors.custom_error}</p>
                         </span>):null}
                        {loading?( <div  className="text-center">
                         <div className="spinner-border text-primary " role="status">
                             <span className="sr-only">Loading...</span>
                         </div>
                         </div>):null}
         
                         <input type="submit" className="btn btn-register float-end form-control" disabled={loading}  value="Register"/>
                     </div>
                     <div className="clearfix"></div>
                     <div className="form-group">
                     Already have account ? Please <Link className="btn-loginNv" to="/login">Login</Link>
                     </div>
         
         
                     </form>
         
         
                 </div>
         
             </div>
         
         
             </div>
        </div>
     </>
    );
}