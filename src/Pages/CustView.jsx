import React, {useState, useEffect} from 'react'
import TopBar from '../Components/TopBar';
import Table from 'react-bootstrap/Table';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CustView() {

    const [userData, setUserData]=useState([]);
    useEffect( ()=>{
        const getUserData= async()=>{
            const reqData= await fetch("http://localhost/LOMS/php/user.php");
            const resData= await reqData.json();
           // console.log(resData);
            setUserData(resData);
        }
        getUserData();
    });
  return (
    <div>
      <TopBar/>
        <div className="backDiv">
            <div className="viewCard">
            <h3 className="cardTitle">View Customers</h3>
            <br/>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>NIC Number</th>
                    <th>Gender</th>
                    <th>Contact 1</th>
                    <th>Contact 2</th>
                    <th>Address</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((uData, index)=>(
                    <tr key={index}>
                        <td>{uData.id}</td>
                        <td>{uData.cname}</td>
                        <td>{uData.nicnum}</td>
                        <td>{uData.gender}</td>
                        <td>{uData.contact1}</td>
                        <td>{uData.contact2}</td>
                        <td>{uData.address}</td>
                        <td>

                        <NavDropdown title="Actions" id="basic-nav-dropdown" className='btn btn-outline-dark btn-sm'>
                        <NavDropdown.Item href={"/CustomerEdit/"+uData.id} className='btn btn-sm'>Edit</NavDropdown.Item>
                        <NavDropdown.Item href="/CustomerReg" className='btn btn-sm'>Loans</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/CustomerReg" className='btn btn-sm redText'>Delete</NavDropdown.Item>
                        </NavDropdown>

  
                        </td>
                    </tr>
                        ))
                    }

                </tbody>
                </Table>

            </div>
        </div>

    </div>
  )
}

export default CustView;
