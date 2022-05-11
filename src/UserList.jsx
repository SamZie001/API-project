import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './UserList.css'

function UserList() {

    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users')
    const [listOfUser, setlistOfUser] = useState([])

    try{
        useEffect(()=>{
            axios.get(url)
            .then((res)=>{
                setlistOfUser(res.data)
            })
        }, [url])
    }catch(err){
        console.log('COULD NOT FETCH DATA')
    } 

  return (
    <div>
        {
            listOfUser.map((each)=>(
                <div key={each.id}>
                    <div className="head"><h3>{each.id}</h3></div>
                    <div className='result-box'>
                        <h3>Name :  <span>{each.name}</span></h3>
                        <h3>Username :  <span>{each.username}</span></h3>
                        <h3>Email :  <span>{each.email}</span></h3>
                            <div className="address">
                                <h3>Address : <span>{each.address.street}, {each.address.suite}, {each.address.city}</span></h3>
                                <h3>Zip-code : <span>{each.address.zipcode}</span></h3>
                                <h3>Geo-location : <span>{each.address.geo.lat}, {each.address.geo.lng} </span></h3>
                            </div>
                        <h3>Phone :  <span>{each.phone}</span></h3>
                        <h3>Website :  <span>{each.website}</span></h3>
                            <div className="company">
                                <h3>Company : <span>{each.company.name}</span></h3>
                                <h3>Cath-Phrase : <span>{each.company.name}</span></h3>
                                <h3>Aim : <span>{each.company.bs}</span></h3>
                            </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default UserList