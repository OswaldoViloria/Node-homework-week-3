import React, { useState } from 'react'

const SignUp = () => {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

 const handleSubmit = () => {"handleSubmit is assigned a value but never used."
fetch("http://localhost:4000/user/sign-up", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    email: email,
    password: password
  }),
  headers: {
    "Content-Type": "application/json"
  }
})
};
  return (
    <>
    <h1>Sign Up</h1>
    <div>
      <label for="name">Name</label>
      <input value = {name} type="text" name="name" id="" placeholder="name" onChange={(e) => setName(e.target.value)} />
      
      <label for="email">Email</label>
      <input value = {email} type="text" name="email" id="" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      
      <label for="passWord">Password</label>
      <input value = {password} type="password" name="password" id="" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
      
      <button onClick = {(e) => handleSubmit()}>Sign Up</button>
    </div>
    </>
     
  ) 
}

export default SignUp