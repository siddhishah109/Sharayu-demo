import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCustomer } from '../Components/CustomerContext';
import { useEvent } from '../Components/EventContext';

const UserFeedBackPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { eventId } = useEvent();
  const { setCustomerId } = useCustomer();
  const [rating, setRating] = useState(2);
  const [eventName, setEventName] = useState('');

  useEffect(() => {
    // Fetch the event name from the API
    axios.get(`https://kitchen-yver.onrender.com/api/event/${eventId}`)
      .then(response => {
        setEventName(response.data.data.event.event_name);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, [eventId]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      customer_name: name,
      customer_phone: number,
      customer_overall_rating: rating,
      event_id: eventId
    };
    
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Rating:', rating);
   
    try {
      const response = await axios.post('http://localhost:4000/api/customer', data);
      console.log('API Response:', response.data);
      setCustomerId(response.data.data.customer._id);
      navigate('/button');
    } catch (error) {
      console.error('API Error:', error);
    }
  
  };


  return (
    <>
    <div className='userfeedback'>
    <div className='event-name'>{eventName}</div>
    <div className='give-feedback'>
    Give Feedback
    </div>
    <form onSubmit={handleSubmit}>
    <div className='user-rating' >
          <Rating
            name="star-rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            size="large"
          />
        </div>
        <div>
          
          <TextField
            id="name"
            type="text"
            value={name}
            className='user-textfield'
            placeholder='Enter Name here'
            onChange={(e) => setName(e.target.value)}
          
          />
        </div>
        <div>
         
          <TextField
            id="number"
            type="text"
            placeholder='Enter Number here '
            value={number}
            className='user-textfield'
            onChange={(e) => setNumber(e.target.value)}
         
          />
        </div>

       
        <div>
          <Button type="submit" variant="contained" color="primary" className='user-submit'>
            Submit
          </Button>
        </div>
      </form>
    </div>

    </>
  )
}

export default UserFeedBackPage