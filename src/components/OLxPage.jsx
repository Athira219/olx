import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function OLxPage() {
  const [data,setData] = useState('')

  const getApi= async()=>{
   const response =  await fetch('https://fakestoreapi.com/products') 
   response.json().then(datas=>{
        console.log(datas);
        setData(datas)
        // data.forEach(item=>{
        //   console.log(item);
        // })

   })
  }
  console.log(data);

  useEffect(()=>{
    getApi()
  },[])
  return (
    <div>
     
      <Row>
      <p className='mt-5 ms-5 fs-3 text-dark'>Fresh recommendations</p>
     {data?.length>0? data.map((item)=>(
      
      <Col sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width:'17rem',height:'18rem'}} className='mt-5 mb-5 ms-5' >
      <i class="fa-regular fa-heart d-flex justify-content-end m-1"></i>
     
    <Card.Img style={{ height:'9rem',width:'100%'}} variant="top" src={item.image} />
    
    <Card.Body>
      <Card.Title style={{fontWeight:'bold',color:'black'}}>₹ {item.price}</Card.Title>
      <Card.Text>
     <p> {item.title.slice(0,20)}...</p>
     
      </Card.Text>
      
      
    </Card.Body>
  </Card>
      </Col>
    

     )
      ):<p>Nothing to Display</p>
      }
    </Row>
    </div>
  )
}

export default OLxPage
