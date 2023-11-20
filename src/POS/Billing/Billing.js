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
        <tr className="title-row">
          <th className="d-flex align-items-start"><span className='span-th'>Barcode No.</span></th>
          <th className=""><span className='span-th'>Product Name</span></th>
          <th className=""><span className='span-th'>Qtty</span></th>
          <th className="d-flex justify-content-end"><span className='span-th'>Total Price</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>13442</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2432</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3563</td>
          <td >Larry the Bird</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>2363</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
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