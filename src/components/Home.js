import React ,{useState , useEffect} from 'react'

const Home = () => {
    const [user , setUser] = useState({})

    useEffect(()=>{
        fetch('/data')
        .then(resData=>resData.json())
        .then(res=>{
            // console.log(res)
            setUser(res)
            
        })
    },[])
    return (
        <div>
            {user.message} {user.name}!!!
        </div>
    )
}

export default Home
