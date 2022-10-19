import React,{useState,useEffect} from 'react';

import { Row, Col, Card, Tab, Tabs, Table } from 'react-bootstrap';
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Axios from 'axios'
import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

const DashDefault = () => {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:4000/data").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setUserId(resp[0].id)
        
      })
    })
  }

    function deleteUser(id) {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
 
  function selectUser(id)
  {//trst

  }
  
  function updateUser()
  {
    let item={name,email}
    console.warn("item",item)
    fetch(`http://localhost:4000/data/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }


  return (

    <React.Fragment>
    
    
    
      <Row>
      <Col md={6} xl={4}>
        <Card>
          <Card.Body>
            <h6 className="mb-4">total customers</h6>
            <div className="row d-flex align-items-center">
              <div className="col-9">
                <h3 className="f-w-300 d-flex align-items-center m-b-0">
                  <i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> $2,420
                </h3>
              </div>

              <div className="col-3 text-right">
                <p className="m-b-0">50%</p>
              </div>
            </div>
        
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} xl={4}>
        <Card>
          <Card.Body>
            <h6 className="mb-4">Member's</h6>
            <div className="row d-flex align-items-center">
              <div className="col-9">
                <h3 className="f-w-300 d-flex align-items-center m-b-0">
                <i className="feather icon-arrow-up text-c-green f-bold m-r-5" /> $1,210
                </h3>
              </div>

              <div className="col-3 text-right">
                <p className="m-b-0">15%</p>
              </div>
            </div>
      
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4}>
        <Card>
          <Card.Body>
            <h6 className="mb-4">active now</h6>
            <div className="row d-flex align-items-center">
              <div className="col-9">
                <h3 className="f-w-300 d-flex align-items-center m-b-0">
                  <i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> 316
                </h3>
              </div>

            
            </div>
           
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} xl={8}>
     
      <Card className="Recent-Users">
      <Card.Header>
        <Card.Title as="h5">Recent Users</Card.Title>
      </Card.Header>
      <Card.Body className="px-0 py-2">
      
   
 
      {
        users.map((item,i)=>
        <Table responsive hover>
          <tbody>
            <tr className="unread">
              <td>
                <img className="rounded-circle" style={{ width: '80px',objectFit:'cover' }} src={item.avatar}  />
              </td>
           
              <div key={item.id}>
              <td>
                <h6 className="mb-1">{item.first_name}</h6>
                <p className="m-0">{item.last_name}</p>
                <p className="m-0">{item.email}</p>
              </td>
              </div>
              <td>
                <h6 className="text-muted">
                  <i className="fa fa-circle text-c-green f-10 m-r-15" />
                  customers
                </h6>
              </td>
              <td>
                <Link to="#" className="label  text-white f-12" style={{background:'red'}} onClick={() => deleteUser(item.id)}>
                  remove
                </Link>
                <Link to="#" className="label  text-white f-12" style={{background:'black'}} onClick={() => selectUser(item.id)}>
                  edit
                </Link>
              </td>
            </tr>
        
      
   
          </tbody>
        </Table>
        )
      },
      

      </Card.Body>
    </Card>
 
      </Col>
   
      <Col md={6} xl={4}>
      <Card className="card-event">
          <Card.Body>
            <div className="row align-items-center justify-content-center">
              <div className="col">
                <h5 className="m-0">Upcoming Event</h5>
              </div>
              <div className="col-auto">
                <label className="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
              </div>
            </div>
            <h2 className="mt-2 f-w-300">
              45<sub className="text-muted f-14">Competitors</sub>
            </h2>
            <h6 className="text-muted mt-3 mb-0">You can participate in event </h6>
            <i className="fa fa-angellist text-c-purple f-50" />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="border-bottom">
            <div className="row d-flex align-items-center">
              <div className="col-auto">
                <i className="feather icon-zap f-30 text-c-green" />
              </div>
              <div className="col">
                <h3 className="f-w-300">235</h3>
                <span className="d-block text-uppercase">total ideas</span>
              </div>
            </div>
          </Card.Body>
          <Card.Body>
            <div className="row d-flex align-items-center">
              <div className="col-auto">
                <i className="feather icon-map-pin f-30 text-c-blue" />
              </div>
              <div className="col">
                <h3 className="f-w-300">26</h3>
                <span className="d-block text-uppercase">total locations</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
     
    
   
    
     
    </Row>

    </React.Fragment>
  );
};

export default DashDefault;
