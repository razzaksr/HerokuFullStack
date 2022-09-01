import { useState } from "react"
import { onSubmitLogin } from "./Bridge"
import { SignUp } from "./SignUp"

export const Login=()=>{

    const[signview,setSignview]=useState(false)

    const[person,setPerson]=useState({
        "username":"",
        "password":""
    })

    const gather=(eve)=>{
        const{name,value}=eve.target
        setPerson((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onLog=async()=>{
        await onSubmitLogin(person)
        window.location.assign("/")
    }

    const onRes=()=>{
        setPerson(()=>{
            return{
                "username":"",
                "password":""
            }
        })
    }

    return(
        <>
            {
                (signview)?
                <><SignUp/></>
                :
                <>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8 col-sm-12 shadow rounded-5 p-5">
                                <div className="form group">
                                    <label>Username</label>
                                    <input type="text" name="username" value={person.username} onChange={gather} placeholder="username please" className="form-control" />
                                </div>
                                <div className="form group">
                                    <label>Password</label>
                                    <input type="password" name="password" value={person.password} onChange={gather} placeholder="password please" className="form-control" />
                                </div>
                                <div className="mt-4 row justify-content-around">
                                    <button className="col-2 btn btn-primary" onClick={onLog}>
                                        <i class="bi bi-airplane-engines-fill"></i>
                                    </button>
                                    <button className="col-2 btn btn-dark" onClick={onRes}>
                                        <i class="bi bi-arrow-clockwise"></i>
                                    </button>
                                </div>
                                <button className="btn btn-secondary" onClick={()=>{
                                    setSignview(true)
                                }}>New USer?</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}