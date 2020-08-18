import React ,{useState , useEffect} from 'react'
import { Card , Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Items = () => {
    const [items, setItems] = useState({})

    useEffect(()=>{
        fetch('/api/items')
        .then(res=>res.json())
        .then(resData=>{
            // console.log(resData)
            setItems(resData)
        })
    },[])
    console.log(items)
    return (
       
            <Card style={{ width: '18rem' }}className="justify-content-end" >
                <Card.Img variant="top" src={items.img} />
                <Card.Body>
                <Card.Title>회사 : {items.brand}</Card.Title>
                <Card.Title>MODEL : {items.model}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
         
    )
}

export default Items
