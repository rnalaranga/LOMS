import React, {useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TopBar from "../Components/TopBar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CustReg() {

  const navigate= useNavigate();
  const [formvalue, setFormvalue]= useState({name:'', nic:'', gender:'', contact1:'', contact2:'', address:''});
  const [message, setMessage]= useState('');
  const handleInput =(e)=>{
      setFormvalue({...formvalue, [e.target.name]:e.target.value});
    }

    const handleSubmit =async(e)=>{
      e.preventDefault();
      const formdata= {name:formvalue.name, nic:formvalue.nic, gender:formvalue.gender, contact1:formvalue.contact1, contact2:formvalue.contact2, address:formvalue.address};
      const res= await axios.post("http://localhost/LOMS/php/user.php",formdata);
      if(res.data.success){
        setMessage(res.data.success);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    }


  return (
    <div>
      <TopBar/>
      <div className="backDiv">

        <div className="formCard">
        <h3 className="cardTitle">Customer Registration</h3>
        <br/>
          <Form onSubmit={ handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" value={formvalue.name} name="name" onChange={ handleInput} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>NIC Number</Form.Label>
              <Form.Control type="text" placeholder="Enter NIC" value={formvalue.nic} name="nic" onChange={ handleInput} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Select aria-label="Gender" value={formvalue.gender} name="gender" onChange={ handleInput}>
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contact Number 1</Form.Label>
              <Form.Control type="text" placeholder="Enter contact number 1" value={formvalue.contact1} name="contact1" onChange={ handleInput} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contact Number 2</Form.Label>
              <Form.Control type="text" placeholder="Enter contact number 2" value={formvalue.contact2} name="contact2" onChange={ handleInput}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Address" value={formvalue.address} name="address" onChange={ handleInput}/>
            </Form.Group>
            <Button variant="warning" type="submit">
              Save Customer
            </Button>
            <br/><br/>
            <p className="text-success">{ message }</p>

          </Form>
        </div>
      </div>
    </div>
  )
}

export default CustReg;
