import React from 'react'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom'
//import Login from './LoginForm'

export default function Home() {
  const navigate=useNavigate();
  return (
    <div>
          <h1>Orange Line Train Driver Route Management</h1>


      <div className='contentContainer'>
        <div className='actionBox'>
          <a className='btn' href='https://docs.google.com/spreadsheets/d/19MZEVPw86AmJc4-gtE8EzozdauDufTAKgsFWNVMXk0o/edit#gid=0'>
            Change Time Table
          </a>
          <button className='btn' onClick={()=>{navigate('/timeTable')}}>
            Driver Pickup 
          </button>
        </div>
      </div>
    </div>
  )
}
