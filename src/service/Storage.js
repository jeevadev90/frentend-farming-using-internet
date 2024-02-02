export const StoreUserData=(data)=>
{
    localStorage.setItem("accessToken",data);
}
export const getUserData=()=>
{
    return localStorage.getItem("accessToken");
}
export const removeUserData=()=>{
    localStorage.removeItem('accessToken');
}