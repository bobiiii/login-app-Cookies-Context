import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { RingLoader } from 'react-spinners'

function Signup() {
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
     const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const url = "https://comfortable-gold-belt.cyclic.app/signup"
    axios.post(url, {
        phone, 
        password
    })
    .then((res)=>{
    setLoading(false)
    navigate("/")

    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)
    })

}
  
    return (<div className='w-75 m-auto'>
        {loading ? 
        <div className='d-flex justify-content-center'>
        <RingLoader />
             </div>   
        : undefined}
        <h3 className='text-center'>Signup Form</h3>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
    <input onChange={(e)=>{setPhone(e.target.value)}} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Signup