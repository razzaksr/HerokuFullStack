import axios from "axios"

export const onSubmitLogout=async()=>{
    try{
        const t = await axios.get(`/login?logout`)
        sessionStorage.removeItem('user')
        return
    }catch(err){
        alert(err)
    }
}

export const onSubmitLogin=async(object)=>{
    const credentials=object.username+":"+object.password
    const tok=btoa(credentials)
    try{
        const t = await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${tok}`
            }
        })
        if(t.data){
            sessionStorage.setItem("user",tok)
            return;
        }
    }catch(err){
        alert(err)
    }
}

export const onSubmitSignup=async(object)=>{
    try{
        const t = await axios.post(`/api/signup`,object)
        return t
    }catch(err){
        alert(err)
    }
}

export const onSubmitDeleteCondition=async(obj)=>{
    try{
        const t = await axios.delete(`/api/delall/${obj}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){alert(err)}
}

export const onSubmitUpdateCondition=async(obj)=>{
    try{
        const t = await axios.put(`/api/ups/${obj}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitShortList=async(object)=>{
    try{
        if(object.price!=0&&object.size==0.0&&object.brand==""&&object.type==""){
            const t = await axios.get(`/api/byprice/${object.price}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.getItem('user')}`
                }
            })
            return t
        }
        else if(object.price==0&&object.size!=0.0&&object.brand!=""&&object.type==""){
            const t = await axios.get(`/api/bytwo/${object.brand}/${object.size}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.getItem('user')}`
                }
            })
            return t
        }
        else if(object.price==0&&object.size==0.0&&object.brand==""&&object.type!=""){
            const t = await axios.get(`/api/bywhat/${object.type}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.getItem('user')}`
                }
            })
            return t
        }
        else{
            return {"err":"Invalid filter call"}
        }
    }
    catch(err){alert(err)}
}

export const onSubmitDelete=async(ref)=>{
    try{
        const t = await axios.delete(`/api/delid/${ref}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitUpdate=async(object)=>{
    try{
        const t = await axios.put(`/api/up`,object,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitRead=async(id)=>{
    try{
        const t = await axios.get(`/api/${id}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitList=async()=>{
    try{
        const t = await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t;
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitCreate=async(object)=>{
    try{
        const t = await axios.post(`/api/new`,object,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}