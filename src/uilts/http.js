import axios from "axios";
 const http = axios.create({
     timeout:500
 })
 http.interceptors.request.use(()=>{
     if(config.method=="post"){
         config.data = config.data;
     }else if(config.method=="get"){
        config.params = {...config.data}
     }
 })