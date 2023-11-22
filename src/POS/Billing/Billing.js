import React ,{useState} from 'react'
import './Billing.css'
import Row from 'react-bootstrap/Row';



const Billing = () => {
  const [data, setData] = useState([
    { barcode: 13442, productName: 'Mark', quantity: 1, totalPrice: 55 },
    { barcode: 2432, productName: 'Jacob', quantity: 1, totalPrice: 2 },
    { barcode: 3563, productName: 'Larry the Bird', quantity: 1, totalPrice: 5 }
  ]);

  const handleQuantityChange = (index, change) => {
    const newData = [...data];
    newData[index].quantity += change;
    if (newData[index].quantity < 1) {
      newData[index].quantity = 1;
    }
    setData(newData);
  };


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
      {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.barcode}</td>
                  <td>{item.productName}</td>
                  <td>
                  <div className="quantity-container">
                      <button className='button-quantity' onClick={() => handleQuantityChange(index, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button  className='button-quantityPlus' onClick={() => handleQuantityChange(index, 1)}>+</button>
                    </div>
                  </td>
                  <td>{item.totalPrice}</td>
                </tr>
              ))}
  
        
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