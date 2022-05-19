import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Register = () => {
    var [name,setName]=useState("")
    var [email,setEmail]=useState("")
    var [uname,setUname]=useState("")
    var [pass,setPass]=useState("")
    var [cpass,setCpass]=useState("")
    const subData=()=>{
        const data={"name":name,"email":email,"uname":uname,"pass":pass,"cpass":cpass}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Username</label>
                    <input onChange={(e)=>{setUname(e.target.value)}}className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPass(e.target.value)}} className="form-control" placeholder="" type="password"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Confirm Password</label>
                    <input onChange={(e)=>{setCpass(e.target.value)}} className="form-control" placeholder="" type="password"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-primary">Register</button>
                </div>
                <Link className="nav-link active" to='/'>Back To Login</Link>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Register