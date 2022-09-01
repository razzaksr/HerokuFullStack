import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitUpdateCondition } from "./Bridge"

export const Alter=()=>{

    const n=useNavigate()

    const[brand,setBrand]=useState("")

    const collect=(eve)=>{
        setBrand(eve.target.value)
    }

    const onUp=async()=>{
        await onSubmitUpdateCondition(brand)
        n("/view")
    }

    return(
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 p-5 shadow rounded-5">
                        <div className="form group">
                            <label>Brand to provide discount</label>
                            <input type="text" name="brand" placeholder="Brand name" value={brand} onChange={collect} className="form-control" />
                        </div>
                        <button className="col-3 mt-2 btn btn-info" onClick={onUp}>
                            <i class="bi bi-caret-up-square-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}