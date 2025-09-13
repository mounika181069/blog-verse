import React from 'react'
import ButtonClick from './ButtonClick'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const[formData,setFormData]=useState({
    email:"",
    password:""
  })





  const handleEmail = () => {
    setEmail(event.target.value)
  }
  const handlePassword = () => {

    setPassword(event.target.value)
  }

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
    console.log(count)
  }
  const haandleClick = (name) => {
    alert("hello " + name)
  }

  const handleChange = (event) => {


  setFormData({
    ...formData,
    [event.target.name]:event.target.value
  })
  }
  const handleSubmit = () => {
    event.preventDefault();
    alert(`Email: ${formData.email} \n Password: ${formData.password} \nyou are logged in`)
  }




  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="enter your email" onChange={handleChange} />

        <input type="password" name="password" placeholder="enter your password" onChange={handleChange} />
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default App