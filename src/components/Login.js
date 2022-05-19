import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    var [uname,setUname]=useState("")
    var [pass,setPass]=useState("")
    const subData=()=>{
        const data={"uname":uname,"pass":pass}
        console.log(data)
    }
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">User Name</label>
                    <input onChange={(e)=>{setUname(e.target.value)}} className="form-control" placeholder="Enter User Name" type="text"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPass(e.target.value)}} className="form-control" placeholder="Enter Password" type="password"/>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-primary">Login</button>
                </div>
                <Link className="nav-link active" to='/register'>New User Click Here</Link>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Login