import React from 'react'
import './Billing.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Billing = () => {
  return (
    <div className='body'>
  <div  className='billing-tick-row'>
       <div className='head-title'>
       <div className='head-tile1'>Billing</div>
       <div className='head-tile2'>
        Ticket #0000001
       </div>
       </div>
       <div className='table-billing'>
        <table>
        <thead>
        <tr>
          <th>Barcode No.</th>
          <th>Product Name</th>
          <th>Qtty</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
        </table>
       </div>
   </div>
   <Row className='button-row'>
  <div className=' btn bg-danger billing-button' style={{marginBottom:'10vh'}}>Cancel</div>
  <div className='btn bg-success billing-button'  style={{marginBottom:'10vh'}}>Cash</div>
  <div className='btn bg-success billing-button' style={{marginBottom:'4vh'}}>GPay</div>
  <div className='btn bg-success billing-button'>Split</div>
   </Row>
    </div>
  )
}

export default Billing