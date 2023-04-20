import React from 'react'
import Marky from './App'
import './Superstar.css'
import Info from './Info'
export default function Mainapp() {
  return (
    <div>
        <h3 className='info'>DESIGN THE WAY TO DESCRIBE YOUR INFO</h3>
        <div style={{textAlign:"center"}}>
    <img src='https://img.freepik.com/premium-vector/programmer-concentrated-working-project-developing-programming-coding-technologies_569013-389.jpg?w=2000' alt='' id='markimg'></img>
  </div>
  <div style={{marginTop:"10vh"}}>
    <Info/>
  </div>
  <Marky/>
  </div>
  )
}
