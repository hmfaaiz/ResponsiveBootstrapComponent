import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import { useDispatch,useSelecter } from 'react-redux'
import "./style.css"
import { getUser } from '../features/user'

const Dashboard = () => {
  const dispatch=useDispatch()
  return (
    <>
    <Sidebar/>
    <button onClick={()=>dispatch(getUser())}></button>
    </>

  
   


   
  
  )
}

export default Dashboard
