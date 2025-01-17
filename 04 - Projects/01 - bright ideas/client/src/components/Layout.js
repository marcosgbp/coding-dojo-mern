import React from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserEdit from './Users/UserEdit';

const Layout =(props) =>{
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    axios.post('http://localhost:8000/api/logout')
    .then(response=>{
      navigate('/');
    })
  }
  return(
    <>
      <div className='d-flex justify-content-evenly align-items-center' style={{backgroundColor:"#0d6efd", color:"white", height: "50px", margin: "0px  5rem"}}>
        <h3 style={{paddingTop: 5}} className='helper-left'>{currentUser && `Hi ${currentUser.name}!`}</h3>
        <h3 style={{paddingTop: 5}}>{props.title}</h3>
        {<Link style={{}} className="btn btn-primary btn-helper" to="/bright_ideas">Bright Ideas</Link>}
        {props.showLogout && 
          <div className="dropdown">
            <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {currentUser.alias}
            </a>
          
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link to="/usersedit" className="dropdown-item">Edit</Link>
              <li><a className="dropdown-item" onClick={ logout }>Cerrar Sesion</a></li>
            </ul>
        </div>
        }
      </div>
      <div className='d-flex' style={{backgroundColor:"#afdee7", border:"1px solid black", margin: "0px 5rem"}}>
        <main style={{width: "100%"}}>{props.children}</main>
      </div>
    </>
  )
}

export default Layout;