import { useState } from "react"
import { onSubmitSignup } from "./Bridge"

export const SignUp=()=>{

    const[user,setUser]=useState({
        "empName":"",
        "username":"",
        "password":"",
        "mobile":0,
        "email":""
    })

    const gather=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onSign=async()=>{
        const t = await onSubmitSignup(user)
        alert(JSON.stringify(t.data))
        window.location.assign("/")
    }

    const onReset=()=>{
        setUser(()=>{
            return{
                "empName":"",
                "username":"",
                "password":"",
                "mobile":0,
                "email":""
            }
        })
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12 shadow rounded-5 p-5">
                        <div className="form group">
                            <label>Full Name</label>
                            <input type="text" name="empName" placeholder="enter the name" className="form-control" value={user.empName} onChange={gather} />
                        </div>
                        <div className="form group">
                            <label>User Name</label>
                            <input type="text" name="username" placeholder="enter the username" className="form-control" value={user.username} onChange={gather} />
                        </div>
                        <div className="form group">
                            <label>Set password</label>
                            <input type="password" name="password" placeholder="enter the password" className="form-control" value={user.password} onChange={gather} />
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-lg-6 col-sm-12">
                                <label>Contact number</label>
                                <input type="text" name="mobile" placeholder="enter the mobile" className="form-control" value={user.mobile} onChange={gather} />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="enter the email" className="form-control" value={user.email} onChange={gather} />
                            </div>
                        </div>
                        <div className="mt-4 row justify-content-around">
                            <button className="col-1 btn btn-success" onClick={onSign}>
                                <i class="bi bi-person-circle"></i>
                            </button>
                            <button className="col-1 btn btn-dark" onClick={onReset}>
                                <i class="bi bi-slash-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}