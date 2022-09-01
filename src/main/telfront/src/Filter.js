import { useState } from "react"
import { onSubmitShortList } from "./Bridge"
import { Results } from "./Results"

export const Filter=()=>{

    const[resultview,setResultView]=useState(false)
    const[tmpresult,setTmpresult]=useState([])

    const[short,setShort]=useState({
        "price":0,
        "brand":"",
        "type":"",
        "size":0.0
    })

    const collect=(eve)=>{
        const{name,value}=eve.target
        setShort((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const doFilter=async()=>{
        const t = await onSubmitShortList(short)
        if(t.data){
            if(t.data!="err"){
                setResultView(true)
                setTmpresult(t.data)
            }
            else{
                alert(t.data)
                setResultView(false)
            }
        }
        else{
            setResultView(false)
        }
    }

    return(
        <>
            {
                (resultview)?
                <>
                    <Results show={tmpresult} />
                </>:
                <>
                    <div className="container mt-4">
                        <h1 className="text-center display-4 text-warning">ShortList</h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-12 p-3 shadow rounded-2">
                                <div className="form group">
                                    <label>Filter By Price</label>
                                    <input onChange={collect} value={short.price} type="text" name="price" placeholder="Price to filter" className="form-control" />
                                </div>
                                <h1 className="text-center display-5">OR</h1>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <label>Brand Name</label>
                                        <input onChange={collect} value={short.brand} type="text" name="brand" placeholder="Brand to filter" className="form-control" />
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <label>Size of television</label>
                                        <input onChange={collect} value={short.size} type="text" name="size" placeholder="Size to filter" className="form-control" />
                                    </div>
                                </div>
                                <h1 className="text-center display-5">OR</h1>
                                <div className="form group">
                                    <label>Filter By Type</label>
                                    <input onChange={collect} value={short.type} type="text" name="type" placeholder="Type to filter" className="form-control" />
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <button className="btn btn-outline-info col-1" onClick={doFilter}>
                                        <i class="bi bi-funnel-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}