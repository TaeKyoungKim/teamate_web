import React, {useState } from 'react'
import { useHistory  } from 'react-router-dom'


const SignUp = () => {
    const [user , setUser] = useState({
      email:'',
      username:'',
      password:''
    })

    const history = useHistory()
    function handelInputChange(e) {
      e.preventDefault()
      console.log(e.target)
      const {value , name} = e.target
      setUser({
        ...user,
        [name]:value
      })
    }

    function onSubmit(e) {
      e.preventDefault()
      // console.log(user)
      fetch('/api/register', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>{
        console.log(res)
        if(res.status === 200) {
          console.log("Success")

          history.push('/login')
          
        } else {
          const error = new Error(res.error)
          throw error
        }
       
      })
      .catch(err=>{
        console.error(err)
        alert('Error Signing in plese try again')
      })
    }
    
    return (
       <form onSubmit={onSubmit}>
         <h1>SignUp Page</h1>
         <input type="email" name="email" placeholder="Enter email" value={user.email} onChange={handelInputChange} required />
         <input type="text" name="username" placeholder="Enter username" value={user.username}  onChange={handelInputChange} required />
         <input type="password" name="password" placeholder="Enter Passeword" value={user.password} onChange={handelInputChange} required />
         <input type="submit"value="SIGNUP" />
       </form>
    )
}

export default SignUp;
