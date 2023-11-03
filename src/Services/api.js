import axios from "axios"

const API_URL="http://localhost:8080";
export const saveInvoice=async(payload)=>{
    try{
     return  await axios.post(`${API_URL}/invoice`,payload);
    }
    catch(err){
console.log(err);
return err.response.data
    }
}