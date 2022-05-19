import React, { useState } from 'react'
import Header from './Header'

const Addbook = () => {
    var [bookname,setName]=useState("")
    var [author,setAuthor]=useState("")
    var [price,setPrice]=useState("")
    const subData=()=>{
        const data={"bookname":bookname,"author":author,"price":price}
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
                    <label for="" className="form-label">Book Title</label>
                    <input onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="Enter Book Title" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Author</label>
                    <input onChange={(e)=>{setAuthor(e.target.value)}} className="form-control" placeholder="Enter Author Name" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Price</label>
                    <input onChange={(e)=>{setPrice(e.target.value)}} className="form-control" placeholder="Enter Price" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addbook