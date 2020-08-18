import React ,{useState , useEffect} from 'react'

const Home = () => {
    const [user , setUser] = useState({})

    useEffect(()=>{
        fetch('http://localhost:3001/data')
        .then(resData=>{
            console.log(resData)
            setUser(resData)
        })
    },[])
    return (
        <div>
            This is Home page
        </div>
    )
}

export default Home
