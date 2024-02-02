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
    let data={firstName:inputs.firstName,lastName:inputs.lastName,name:inputs.username,email:inputs.email,password:inputs.password}
    return axios.post(REGISTER_URL,data)
}

export const loginApi=(inputs)=>
{
    let data={email:inputs.email,password:inputs.password}
    return axios.post(LOGIN_URL,data);
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
export const getCategoriesApi=()=>{
    return axios.get(GETCategories_url);
}

export const getArticlesApi=(id)=>
{
    const GETARTICLESLIST_URL=`/users/particularCategories/${id}`
    return axios.get(GETARTICLESLIST_URL);
}

export const getParticularArticleApi=(id)=>
{
    const GETARTICLE_URL=`/users/getArticle/${id}`;
    return axios.get(GETARTICLE_URL);
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