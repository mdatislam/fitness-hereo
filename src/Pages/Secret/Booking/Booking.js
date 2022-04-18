import { connectAuthEmulator } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Booking = () => {
    const handleSubmit=()=>{
        alert( " Thanks For Booking Our Service")
    }
    return (
        <div>
            <h4 className='text-center text-danger '>This is Protective Page</h4>
            <div className="w-50 mt-3 mx-auto border p-2">
         <small className="text-center d-block text-info"> Get Into Shape!</small>
        <h4 className="text-center text-warning mb-2"> Please Fill Up This Form</h4>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control  type="text"  name="name"  placeholder="Enter Name" required />
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control  type="email" name="email"  placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control  type="password" name="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control  type="text" placeholder=" Your Contact No" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>

        </div>
    );
};

export default Booking;