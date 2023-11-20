import React from 'react'
import './Billing.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Billing = () => {
  return (
    <div className='body'>
<Row style={{display:'flex'}}>
       <div className='head-tile1'>Billing</div>
       <div className='head-tile2'>
        Ticket #0000001
       </div>
   </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>

    </div>
  )
}

export default Billing