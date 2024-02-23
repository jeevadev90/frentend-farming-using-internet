import axios from "axios";
import { getUserData } from "./Storage";



axios.defaults.baseURL="http://localhost:8080";

const REGISTER_URL="/registers/userRegister";
const LOGIN_URL="/registers/userLogin";
const PROFILE_URL="/users/userProfile";

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

export const categoriesApi=async(name,image)=>
{
    const formData=new FormData();
    formData.append("image",image)
    formData.append("name",name)
    const token=await getUserData();
    let CATEGORIES_URL="/admin/addCategories";
    return axios.post(CATEGORIES_URL,formData,{
        headers:{
            "Authorization":`Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    });
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
    let token=await getUserData()
    let FETCHFEEDBACK_URL="/feedback/fetchFeedback"
    return axios.get(FETCHFEEDBACK_URL,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}

export const addComments=async(comment,id)=>
{
    let data={comment:comment,id:id}
    let token=await getUserData();
    let ADDCOMMENT_URL="/comments/addcomment"
    return axios.post(ADDCOMMENT_URL,data,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}

export const getComment=async(id)=>
{
    let data={id:id}
    let token=await getUserData();
    let GETCOMMENT_URL="/comments/getcomment"
    return axios.get(GETCOMMENT_URL,data,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}

export const getAdmin=async()=>
{
    let token=await getUserData();
    let GETADMIN_URL="/admin/home";
    return axios.get(GETADMIN_URL,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}

export const addArticle=async(content,description,aimage,cont)=>
{
    let ADDARTICLE_URL="/admin/addArticles"
    let token=await getUserData();
    let formData=new FormData();
    
    formData.append("images",aimage)
    formData.append("title",content.title)
    formData.append("description",description)
    formData.append("content",cont)
    formData.append("name",content.categories)
    return axios.post(ADDARTICLE_URL,formData,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}

export const putImage=async(pimage)=>
{
    let PUTIMAGE_URL="/users/upadateimage"
    let token=await getUserData();
    let formData=new FormData();

    formData.append("image",pimage)
    return axios.put(PUTIMAGE_URL,formData,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}

export const deleteArticle=async(id)=>
{
    let DELETEARTICLE_URL=`/users/deleteArticle/${id}`
    let token=await getUserData()
    return axios.delete(DELETEARTICLE_URL,{
        headers:{
            "Authorization":`Bearer ${token}`
        },
    })
}