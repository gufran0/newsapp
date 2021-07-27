import React from 'react'
import Toolbar from '../components/toolbar'
import styles from "../styles/EOM.module.css"

const Eom = ({employee}) => {
    
    return (
        <div className = "page-container">
        <Toolbar></Toolbar>
           <div className = {styles.main}>
           <h1>employee month header</h1>
           <h3>{employee.name}</h3>
           <h6>{employee.position}</h6>
           <img src = {employee.image}/>
           <p>{employee.description}</p>
           
           </div> 
        </div>
    )
}



export const getServerSideProps = async pageContext => {
 const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth",
 )

 const employee = await apiResponse.json()


return {
   props : {
       employee:employee
   }
}

}



export default Eom
 