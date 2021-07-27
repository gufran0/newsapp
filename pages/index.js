import Head from 'next/head'
import styles from "../styles/Home.module.css"
import Toolbar from "../components/toolbar"

export default function Home() {
  return (
    <>
    <div className = "page-container">
  <Toolbar></Toolbar>
    <div className = {styles.main}>
    <h1>next js news app</h1>


 
    <h3>one stop solution </h3>
    
    </div>
    
     </div>

    
    </ >
  )
}
