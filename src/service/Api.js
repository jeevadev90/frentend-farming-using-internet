import axios from "axios";
import { getUserData } from "./Storage";



axios.defaults.baseURL="http://localhost:8080";
// axios.defaults.headers.common["Authorization"]=`Bearer ${getUserData()}`;
const REGISTER_URL="/registers/userRegister";
const LOGIN_URL="/registers/userLogin";
const PROFILE_URL="/users/userProfile";
const CATEGORIES_URL="/admin/addCategories";
const GETCategories_url="/users/getCategories";





export const registerApi=(inputs)=>
{
    // const token=getUserData()
    let data={firstName:inputs.firstName,lastName:inputs.lastName,name:inputs.username,email:inputs.email,password:inputs.password}
    return axios.post(REGISTER_URL,data,{
        headers:{
            "Authorization":` `
        }
    })
}

export const loginApi=(inputs)=>
{
    let data={email:inputs.email,password:inputs.password}
    return axios.post(LOGIN_URL,data,{
        headers:{
            "Authorization":` `
        }
    });
}

export const profileApi=async()=>
{
    const token=await getUserData();

    return axios.get(PROFILE_URL,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
}

export const categoriesApi=(name,image)=>
{
    let data={image:image,name:name}
    
    
    return axios.post(CATEGORIES_URL,data);
}
export const getCategoriesApi=async()=>{
    const token=await getUserData();
    return axios.get(GETCategories_url,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
}

export const getArticlesApi=async(id)=>
{
    const token=await getUserData();
    const GETARTICLESLIST_URL=`/users/particularCategories/${id}`
    return axios.get(GETARTICLESLIST_URL,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
}

export const getParticularArticleApi=async(id)=>
{
    const token =await getUserData();
    const GETARTICLE_URL=`/users/getArticle/${id}`;
    return axios.get(GETARTICLE_URL,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
}
export const writeArticle=async(texts)=>
{
    let data={article:texts}
    const token=await getUserData();
    const WRITEARTILCE_URL="/users/addUserArticle";
    return axios.post(WRITEARTILCE_URL,data,{
            headers:{
                "Authorization":`Bearer ${token}`
            },
         
      });
}

export const getUserArticle=async()=>
{
    const token =await getUserData();
    const GETUSERARTICLE_URL="/users/getUserArticles";
    return axios.get(GETUSERARTICLE_URL,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    });

}

export const getAlluserArticle=async(page)=>
{
    const token =await getUserData();
    const GETALLUSERARTICLE_URL="/users/getAlluserarticle";
    return axios.get(GETALLUSERARTICLE_URL,{
        params:{
            page:page,
            size:10
        }, headers:{
            "Authorization":`Bearer ${token}`
        },
    });
}

export const getParticularusrArt=async(id)=>
{
    const token =await getUserData();
    const PARTICULARUSERARTICLE_URL=`/users/getParticularUserArticle/${id}`;
    return axios.get(PARTICULARUSERARTICLE_URL,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    });
}

export const addFeedback=async(feedback)=>
{
    let data={content:feedback.content,email:feedback.email}
    const token =await getUserData()
    const ADDFEEDBACK_URL="/feedback/addfeedback"
    return axios.post(ADDFEEDBACK_URL,data,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}

export const fetchFeedback=async()=>
{
    let token=getUserData()
    let FETCHFEEDBACK_URL="/feedback/fetchFeedback"
    return axios.get(FETCHFEEDBACK_URL,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}

export const addComments=(comment,id)=>
{
    let data={comment:comment,id:id}
    let token=getUserData();
    let ADDCOMMENT_URL="/comments/addcomment"
    return axios.post(ADDCOMMENT_URL,data,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}

export const getComment=(id)=>
{
    let data={id:id}
    let token=getUserData();
    let GETCOMMENT_URL="/comments/getcomment"
    return axios.get(GETCOMMENT_URL,data,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}