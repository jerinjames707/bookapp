import React from 'react'
import Header from './Header'

const ViewBook = () => {
    var booklist=[
        { "title":"Wings of Fire",
        "price":"200",
        "author":"APJ",
        },
        {
            "title":"The Guide",
            "price":"300",
            "author":"R.K. Narayan",
        },
        {
            "title":"A Fine Balance",
            "price":"200",
            "author":"Rohinton Mistry",
        }
    ]
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            
            
  
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Book Name</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
   
    <tbody>
    {booklist.map((value,key)=>{
                    return  <tr>
      <th scope="row">{value.title}</th>
      <td>{value.author}</td>
      <td>{value.price}</td>
    </tr>
    
 
                   
                    
                })}
                 </tbody>
  </table>

            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default ViewBook