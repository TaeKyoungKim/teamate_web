import React, {useState} from 'react'
import { useHistory  } from 'react-router-dom'

const Login = () => {
    const [user , setUser] = useState({
        email:'',
        password:''
    })

    const history = useHistory()

    function onChangeInput(e){
        e.preventDefault()
        const {value , name} = e.target

        setUser({
            ...user,
            [name]:value
        })
        
    }

    console.log(user)
    function onSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3001/api/authenticate', {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>{
            if(res.status===200) {
                console.log(res)
                history.push('/')
            } else {
                const error = new Error(res.error)
                throw error
            }
           
        })
        .catch(err=>{
            // console.log(err)
            alert("Error logging in pls try again")
        })

    }
    return (
        <form onSubmit={onSubmit}>
            <input name="email" placeholder="Enter email" value={user.email} type="email" onChange={onChangeInput} required />
            <input name="password" placeholder="Enter pw" value={user.password} type="password" onChange={onChangeInput} required />
            <input type="submit" value="LOGIN"/>
        </form>
    )
}

export default Login
