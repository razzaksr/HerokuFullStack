import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDeleteCondition } from "./Bridge"

export const Remove=()=>{
    const n=useNavigate()

    const[type,setType]=useState("")

    const collect=(eve)=>{
        setType(eve.target.value)
    }

    const onDel=async()=>{
        const t = await onSubmitDeleteCondition(type)
        alert(JSON.stringify(t.data))
        n("/view")
    }

    return(
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 p-5 shadow rounded-5">
                        <div className="form group">
                            <label>Type to Delete All</label>
                            <input type="text" name="type" placeholder="Type of television" value={type} onChange={collect} className="form-control" />
                        </div>
                        <button className="col-3 mt-2 btn btn-danger" onClick={onDel}>
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}