import React, {useState} from 'react'


const SignUp = () => {
    const [user , setUser] = useState({
      email:'',
      username:'',
      password:''
    })

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
      console.log(user)
    }
    console.log(user)
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
